"use client";

import { useState, useMemo } from "react";

interface Room {
  id: number;
  nom: string;
  longueur: string;
  largeur: string;
  hauteur: string;
}

let nextId = 1;

function createRoom(): Room {
  return {
    id: nextId++,
    nom: "",
    longueur: "",
    largeur: "",
    hauteur: "2.50",
  };
}

function parseNum(val: string): number {
  const n = parseFloat(val.replace(",", "."));
  return isNaN(n) || n < 0 ? 0 : n;
}

function formatM2(n: number): string {
  return n.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function CalculSurfaceCarrez() {
  const [rooms, setRooms] = useState<Room[]>([createRoom()]);

  const updateRoom = (id: number, field: keyof Room, value: string) => {
    setRooms((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [field]: value } : r))
    );
  };

  const addRoom = () => {
    setRooms((prev) => [...prev, createRoom()]);
  };

  const removeRoom = (id: number) => {
    setRooms((prev) => prev.filter((r) => r.id !== id));
  };

  const results = useMemo(() => {
    return rooms.map((room) => {
      const longueur = parseNum(room.longueur);
      const largeur = parseNum(room.largeur);
      const hauteur = parseNum(room.hauteur);
      const surfaceBrute = longueur * largeur;
      const eligible = hauteur >= 1.8;
      const surfaceCarrez = eligible ? surfaceBrute : 0;
      return {
        id: room.id,
        nom: room.nom || `Pi&egrave;ce ${rooms.indexOf(room) + 1}`,
        surfaceBrute,
        hauteur,
        eligible,
        surfaceCarrez,
      };
    });
  }, [rooms]);

  const totalCarrez = useMemo(
    () => results.reduce((sum, r) => sum + r.surfaceCarrez, 0),
    [results]
  );

  const totalBrute = useMemo(
    () => results.reduce((sum, r) => sum + r.surfaceBrute, 0),
    [results]
  );

  const excludedCount = useMemo(
    () => results.filter((r) => !r.eligible && r.surfaceBrute > 0).length,
    [results]
  );

  return (
    <div className="space-y-8">
      {/* ---------- Formulaire ---------- */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          D&eacute;tail des pi&egrave;ces
        </h2>

        <div className="space-y-4">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className="bg-gray-50 rounded-xl p-4 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-gray-700">
                  Pi&egrave;ce {index + 1}
                </span>
                {rooms.length > 1 && (
                  <button
                    onClick={() => removeRoom(room.id)}
                    className="text-red-500 hover:text-red-700"
                    aria-label="Supprimer la pi&egrave;ce"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                )}
              </div>

              <div className="grid gap-3 sm:grid-cols-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    value={room.nom}
                    onChange={(e) => updateRoom(room.id, "nom", e.target.value)}
                    placeholder={`Pi\u00e8ce ${index + 1}`}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Longueur (m)
                  </label>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={room.longueur}
                    onChange={(e) =>
                      updateRoom(room.id, "longueur", e.target.value)
                    }
                    placeholder="5.00"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Largeur (m)
                  </label>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={room.largeur}
                    onChange={(e) =>
                      updateRoom(room.id, "largeur", e.target.value)
                    }
                    placeholder="4.00"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Hauteur (m)
                  </label>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={room.hauteur}
                    onChange={(e) =>
                      updateRoom(room.id, "hauteur", e.target.value)
                    }
                    placeholder="2.50"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <button
            onClick={addRoom}
            className="bg-blue-600 text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-blue-700 transition"
          >
            Ajouter une pi&egrave;ce
          </button>
        </div>
      </div>

      {/* ---------- R&eacute;sultats ---------- */}
      {totalBrute > 0 && (
        <>
          {/* Summary */}
          <div className="bg-blue-600 text-white rounded-xl p-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-blue-200 text-sm font-medium">
                  Surface totale brute
                </p>
                <p className="text-2xl font-bold">{formatM2(totalBrute)} m&sup2;</p>
              </div>
              <div>
                <p className="text-blue-200 text-sm font-medium">
                  Surface loi Carrez
                </p>
                <p className="text-2xl font-bold">
                  {formatM2(totalCarrez)} m&sup2;
                </p>
              </div>
              <div>
                <p className="text-blue-200 text-sm font-medium">
                  Pi&egrave;ces exclues (&lt; 1,80 m)
                </p>
                <p className="text-2xl font-bold">{excludedCount}</p>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              D&eacute;tail par pi&egrave;ce
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 text-gray-600">
                    <th className="py-2 pr-4 text-left">Pi&egrave;ce</th>
                    <th className="py-2 pr-4 text-right">Surface brute</th>
                    <th className="py-2 pr-4 text-right">Hauteur</th>
                    <th className="py-2 pr-4 text-right">Surface Carrez</th>
                    <th className="py-2 text-center">Statut</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  {results.map((r, i) => (
                    <tr
                      key={r.id}
                      className={`border-b border-gray-100 ${
                        !r.eligible && r.surfaceBrute > 0
                          ? "bg-red-50"
                          : ""
                      }`}
                    >
                      <td className="py-2 pr-4">
                        {rooms[i].nom || `Pi\u00e8ce ${i + 1}`}
                      </td>
                      <td className="py-2 pr-4 text-right">
                        {formatM2(r.surfaceBrute)} m&sup2;
                      </td>
                      <td className="py-2 pr-4 text-right">
                        {formatM2(r.hauteur)} m
                      </td>
                      <td className="py-2 pr-4 text-right font-semibold">
                        {formatM2(r.surfaceCarrez)} m&sup2;
                      </td>
                      <td className="py-2 text-center">
                        {r.surfaceBrute === 0 ? (
                          <span className="text-gray-400">&mdash;</span>
                        ) : r.eligible ? (
                          <span className="text-green-600 font-medium">
                            Incluse
                          </span>
                        ) : (
                          <span className="text-red-600 font-medium">
                            Exclue
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-gray-300 font-bold">
                    <td className="py-3 pr-4">Total</td>
                    <td className="py-3 pr-4 text-right">
                      {formatM2(totalBrute)} m&sup2;
                    </td>
                    <td className="py-3 pr-4"></td>
                    <td className="py-3 pr-4 text-right text-blue-700">
                      {formatM2(totalCarrez)} m&sup2;
                    </td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Info box */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <h3 className="font-semibold text-blue-800 mb-2">
              Rappel loi Carrez
            </h3>
            <p className="text-sm text-blue-700 leading-relaxed">
              La loi Carrez impose de mesurer la superficie priv&eacute;e d&apos;un lot
              de copropri&eacute;t&eacute;. Seules les surfaces dont la hauteur sous plafond
              est &eacute;gale ou sup&eacute;rieure &agrave; <strong>1,80 m</strong> sont
              comptabilis&eacute;es. Les caves, garages, parkings et parties communes ne
              sont pas inclus dans le calcul.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
