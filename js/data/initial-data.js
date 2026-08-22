/**
 * INITIAL DATA - CAMPEONATO PANGARÉ DE KART
 * Temporada Oficial: 54ª Temporada (2026/2) / 54º Campeonato
 */

const INITIAL_SEASONS_DATA = {
  activeSeasonId: '54-2026-2',
  seasons: [
    {
      id: '54-2026-2',
      name: '54ª Temporada (2026/2)',
      year: '2026',
      semester: '2',
      editionNumber: 54,
      circuit: 'Kartódromo Granja Viana',
      etapas: [
        { id: 'etapa-1', name: '1ª Etapa (54º Campeonato)', date: '26/jul', completed: true, location: 'Kartódromo Granja Viana' },
        { id: 'etapa-2', name: '2ª Etapa (54º Campeonato)', date: '23/ago', completed: false, location: 'Kartódromo Granja Viana' },
        { id: 'etapa-3', name: '3ª Etapa (54º Campeonato)', date: '23/ago', completed: false, location: 'Kartódromo Granja Viana' },
        { id: 'etapa-4', name: '4ª Etapa (54º Campeonato)', date: '20/set', completed: false, location: 'Kartódromo Granja Viana' },
        { id: 'etapa-5', name: '5ª Etapa (54º Campeonato)', date: '20/set', completed: false, location: 'Kartódromo Granja Viana' },
        { id: 'etapa-6', name: '6ª Etapa (54º Campeonato)', date: '25/out', completed: false, location: 'Kartódromo Granja Viana (Final)' }
      ],
      categories: {
        g1: {
          id: 'g1',
          name: 'G1',
          description: 'Categoria Principal - Bateria Exclusiva',
          heatInfo: 'Bateria 1 - Corre sozinha na pista',
          teams: [
            {
              num: 1,
              name: 'Kartarugas Race Team 1',
              color: '#22c55e',
              textColor: '#000000',
              drivers: [
                {
                  name: 'Anderson Prachesqui ( O )',
                  results: [
                    { roundId: 'etapa-1', cheg: 10, obs: '', pts: 50 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                },
                {
                  name: 'Vanderlei Tieny',
                  results: [
                    { roundId: 'etapa-1', cheg: 7, obs: '', pts: 56 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                }
              ]
            },
            {
              num: 2,
              name: 'Kartarugas Race Team 2',
              color: '#22c55e',
              textColor: '#000000',
              drivers: [
                {
                  name: 'Edmar Moraes',
                  results: [
                    { roundId: 'etapa-1', cheg: 4, obs: '', pts: 62 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                },
                {
                  name: 'Luiz Felipe Priester',
                  results: [
                    { roundId: 'etapa-1', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                }
              ]
            },
            {
              num: 3,
              name: 'Kartarugas Race Team 3',
              color: '#22c55e',
              textColor: '#000000',
              drivers: [
                {
                  name: 'Felipe Madeiros',
                  results: [
                    { roundId: 'etapa-1', cheg: 16, obs: '', pts: 38 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                },
                {
                  name: 'Fernando Queiroz',
                  results: [
                    { roundId: 'etapa-1', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                }
              ]
            },
            {
              num: 4,
              name: 'Saudade de Casa',
              color: '#e5e7eb',
              textColor: '#000000',
              drivers: [
                {
                  name: 'Walter Santana Torres',
                  results: [
                    { roundId: 'etapa-1', cheg: 2, obs: 'mv', pts: 74 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                },
                {
                  name: 'Alberto Costoya',
                  results: [
                    { roundId: 'etapa-1', cheg: 3, obs: '', pts: 66 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                }
              ]
            },
            {
              num: 5,
              name: '[PLG] Racing',
              color: '#10b981',
              textColor: '#000000',
              drivers: [
                {
                  name: 'Diego Pinto Kops',
                  results: [
                    { roundId: 'etapa-1', cheg: 13, obs: '', pts: 44 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                },
                {
                  name: 'Eduardo Nascimbem',
                  results: [
                    { roundId: 'etapa-1', cheg: 1, obs: '', pts: 80 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                }
              ]
            },
            {
              num: 6,
              name: 'Órbita Saturno IPA',
              color: '#0f172a',
              textColor: '#ffffff',
              drivers: [
                {
                  name: 'Fabio Luiz Ferreira',
                  results: [
                    { roundId: 'etapa-1', cheg: 5, obs: '', pts: 60 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                },
                {
                  name: 'Leandro de Assis Oliveira',
                  results: [
                    { roundId: 'etapa-1', cheg: 12, obs: '', pts: 46 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                }
              ]
            },
            {
              num: 7,
              name: 'Órbita Marte APA',
              color: '#2563eb',
              textColor: '#ffffff',
              drivers: [
                {
                  name: 'Alessandro Zanoli',
                  results: [
                    { roundId: 'etapa-1', cheg: 6, obs: '', pts: 58 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                },
                {
                  name: 'João Grecco Sanches',
                  results: [
                    { roundId: 'etapa-1', cheg: 15, obs: '', pts: 40 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                }
              ]
            },
            {
              num: 8,
              name: 'Chilean Racing Team',
              color: '#cbd5e1',
              textColor: '#000000',
              drivers: [
                {
                  name: 'Alvaro Artemio Marin',
                  results: [
                    { roundId: 'etapa-1', cheg: 17, obs: '', pts: 36 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                },
                {
                  name: 'Valdemar C Silva Jr',
                  results: [
                    { roundId: 'etapa-1', cheg: 11, obs: '', pts: 48 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                }
              ]
            },
            {
              num: 9,
              name: 'Tristão Racing',
              color: '#ffffff',
              textColor: '#000000',
              drivers: [
                {
                  name: 'André Tristão',
                  results: [
                    { roundId: 'etapa-1', cheg: 8, obs: '', pts: 54 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                },
                {
                  name: 'Luiz Carlos Cunha',
                  results: [
                    { roundId: 'etapa-1', cheg: 9, obs: '', pts: 52 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                }
              ]
            },
            {
              num: 10,
              name: 'Turtle Racing',
              color: '#4ade80',
              textColor: '#000000',
              drivers: [
                {
                  name: 'Cauã Magalhães',
                  results: [
                    { roundId: 'etapa-1', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                },
                {
                  name: 'Mateus Ponvechio',
                  results: [
                    { roundId: 'etapa-1', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                }
              ]
            },
            {
              num: 11,
              name: 'Fast Friends',
              color: '#3b82f6',
              textColor: '#ffffff',
              drivers: [
                {
                  name: 'Fernando Jorge Camarinha',
                  results: [
                    { roundId: 'etapa-1', cheg: 21, obs: '', pts: 28 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                },
                {
                  name: 'Alessandro Lucas Soares',
                  results: [
                    { roundId: 'etapa-1', cheg: 14, obs: '', pts: 42 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                }
              ]
            },
            {
              num: 12,
              name: 'Marcha Lenta Race Team',
              color: '#1d4ed8',
              textColor: '#ffffff',
              drivers: [
                {
                  name: 'Bruno Silva',
                  results: [
                    { roundId: 'etapa-1', cheg: 18, obs: '', pts: 34 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                },
                {
                  name: 'Gustavo Carmo',
                  results: [
                    { roundId: 'etapa-1', cheg: 19, obs: '', pts: 32 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                }
              ]
            },
            {
              num: 13,
              name: 'Grid Zero',
              color: '#f97316',
              textColor: '#ffffff',
              drivers: [
                {
                  name: 'José Augusto Camanho',
                  results: [
                    { roundId: 'etapa-1', cheg: 23, obs: '', pts: 24 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                },
                {
                  name: 'Rodrigo Salustriano',
                  results: [
                    { roundId: 'etapa-1', cheg: 24, obs: '', pts: 22 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                }
              ]
            },
            {
              num: 14,
              name: 'Slowmotion Racing',
              color: '#94a3b8',
              textColor: '#000000',
              drivers: [
                {
                  name: 'Carlos Eduardo Souza',
                  results: [
                    { roundId: 'etapa-1', cheg: 20, obs: '', pts: 30 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                },
                {
                  name: 'Gabriel Weizz',
                  results: [
                    { roundId: 'etapa-1', cheg: 22, obs: '', pts: 26 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                }
              ]
            }
          ]
        },
        g2: {
          id: 'g2',
          name: 'G2',
          description: 'Categoria Intermediária - Bateria Conjunta',
          heatInfo: 'Bateria 2 - Corre dividindo a pista com Força Livre',
          teams: [
            {
              num: 15,
              name: 'Brizzotti Racing',
              color: '#2563eb',
              textColor: '#ffffff',
              drivers: [
                {
                  name: 'Marco Aurelio Brizzotti',
                  results: [
                    { roundId: 'etapa-1', cheg: 3, obs: '', pts: 66 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                },
                {
                  name: 'Mateus Brizzotti',
                  results: [
                    { roundId: 'etapa-1', cheg: 4, obs: '', pts: 62 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                }
              ]
            },
            {
              num: 16,
              name: 'Ponto Cego',
              color: '#ef4444',
              textColor: '#ffffff',
              drivers: [
                {
                  name: 'Flavio S Teixeira',
                  results: [
                    { roundId: 'etapa-1', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                },
                {
                  name: 'Maxwell Caleiros Melo',
                  results: [
                    { roundId: 'etapa-1', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                }
              ]
            },
            {
              num: 17,
              name: '2F Race Team',
              color: '#38bdf8',
              textColor: '#000000',
              drivers: [
                {
                  name: 'Felipe Carvalho',
                  results: [
                    { roundId: 'etapa-1', cheg: 6, obs: 'col1', pts: 58 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                },
                {
                  name: 'Felipe Verona',
                  results: [
                    { roundId: 'etapa-1', cheg: 10, obs: 'col1', pts: 50 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                }
              ]
            },
            {
              num: 18,
              name: 'Irmãos Vizioli',
              color: '#dc2626',
              textColor: '#ffffff',
              drivers: [
                {
                  name: 'Jhonathan Vizioli',
                  results: [
                    { roundId: 'etapa-1', cheg: 1, obs: '', pts: 80 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                },
                {
                  name: 'Heitor Vizioli',
                  results: [
                    { roundId: 'etapa-1', cheg: 5, obs: '', pts: 60 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                }
              ]
            },
            {
              num: 19,
              name: 'Salvador Racing',
              color: '#ffffff',
              textColor: '#000000',
              drivers: [
                {
                  name: 'Rodrigo Salvador',
                  results: [
                    { roundId: 'etapa-1', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                },
                {
                  name: 'Gabriel Salvador',
                  results: [
                    { roundId: 'etapa-1', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                }
              ]
            },
            {
              num: 20,
              name: 'TT Race',
              color: '#ffffff',
              textColor: '#000000',
              drivers: [
                {
                  name: 'Anthony Vizioli',
                  results: [
                    { roundId: 'etapa-1', cheg: 8, obs: 'col1', pts: 54 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                },
                {
                  name: 'Thiago Pires',
                  results: [
                    { roundId: 'etapa-1', cheg: 9, obs: 'col1', pts: 52 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                }
              ]
            },
            {
              num: 21,
              name: 'McLaren',
              color: '#f97316',
              textColor: '#ffffff',
              drivers: [
                {
                  name: 'Leandro Pereira',
                  results: [
                    { roundId: 'etapa-1', cheg: 2, obs: 'mv', pts: 74 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                },
                {
                  name: 'Fabricio Dantas',
                  results: [
                    { roundId: 'etapa-1', cheg: 7, obs: 'col1', pts: 56 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                }
              ]
            }
          ]
        },
        fl: {
          id: 'fl',
          name: 'Força Livre',
          description: 'Categoria Livre / Motores Preparados',
          heatInfo: 'Bateria 2 - Corre dividindo a pista com G2',
          teams: [
            {
              num: 22,
              name: 'Kartarugas Race Team 5',
              color: '#22c55e',
              textColor: '#000000',
              drivers: [
                {
                  name: 'Felipe Madeiros (FL)',
                  results: [
                    { roundId: 'etapa-1', cheg: 1, obs: 'mv', pts: 82 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                },
                {
                  name: 'Edmar Moraes (FL) **',
                  results: [
                    { roundId: 'etapa-1', cheg: 7, obs: '', pts: 56 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                }
              ]
            },
            {
              num: 23,
              name: 'Meteoro III',
              color: '#1d4ed8',
              textColor: '#ffffff',
              drivers: [
                {
                  name: 'Alberto Costoya (FL)',
                  results: [
                    { roundId: 'etapa-1', cheg: 8, obs: '', pts: 54 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                },
                {
                  name: 'Anderson Prachesqui ( O ) (FL)',
                  results: [
                    { roundId: 'etapa-1', cheg: 15, obs: '', pts: 40 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                }
              ]
            },
            {
              num: 24,
              name: 'Kartarugas Race Team 7',
              color: '#22c55e',
              textColor: '#000000',
              drivers: [
                {
                  name: 'Vanderlei Tieny (FL)',
                  results: [
                    { roundId: 'etapa-1', cheg: 2, obs: '', pts: 72 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                },
                {
                  name: 'Daniel Carbajal (FL)',
                  results: [
                    { roundId: 'etapa-1', cheg: 5, obs: 'col1', pts: 60 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                }
              ]
            },
            {
              num: 25,
              name: '[PLG] Racing II',
              color: '#0d9488',
              textColor: '#ffffff',
              drivers: [
                {
                  name: 'Diego Pinto Kops (FL)',
                  results: [
                    { roundId: 'etapa-1', cheg: 10, obs: '', pts: 50 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                },
                {
                  name: 'Eduardo Nascimbem (FL)',
                  results: [
                    { roundId: 'etapa-1', cheg: 6, obs: '', pts: 58 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                }
              ]
            },
            {
              num: 26,
              name: 'Órbita Marte APA II',
              color: '#2563eb',
              textColor: '#ffffff',
              drivers: [
                {
                  name: 'Alessandro Zanoli (FL)',
                  results: [
                    { roundId: 'etapa-1', cheg: 3, obs: '', pts: 66 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                },
                {
                  name: 'João Grecco Sanches (FL)',
                  results: [
                    { roundId: 'etapa-1', cheg: 4, obs: '', pts: 62 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                }
              ]
            },
            {
              num: 27,
              name: 'Órbita Saturno IPA II',
              color: '#0f172a',
              textColor: '#ffffff',
              drivers: [
                {
                  name: 'Fabio Luiz Ferreira (FL)',
                  results: [
                    { roundId: 'etapa-1', cheg: 12, obs: '', pts: 46 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                },
                {
                  name: 'Leandro de Assis Oliveira (FL)',
                  results: [
                    { roundId: 'etapa-1', cheg: 9, obs: '', pts: 52 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                }
              ]
            },
            {
              num: 28,
              name: 'Kartarugas Race Team 6',
              color: '#22c55e',
              textColor: '#000000',
              drivers: [
                {
                  name: 'Valdemar C Silva Jr (FL)',
                  results: [
                    { roundId: 'etapa-1', cheg: 11, obs: 'IrD1', pts: 48 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                },
                {
                  name: 'Rafael Basílio',
                  results: [
                    { roundId: 'etapa-1', cheg: 14, obs: '', pts: 42 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                }
              ]
            },
            {
              num: 29,
              name: 'LM Racing',
              color: '#ffffff',
              textColor: '#000000',
              drivers: [
                {
                  name: 'Luiz Felipe Priester (FL)',
                  results: [
                    { roundId: 'etapa-1', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                },
                {
                  name: 'Marcos Passos (FL)',
                  results: [
                    { roundId: 'etapa-1', cheg: 13, obs: '', pts: 44 },
                    { roundId: 'etapa-2', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-3', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-4', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-5', cheg: '-', obs: '', pts: 0 },
                    { roundId: 'etapa-6', cheg: '-', obs: '', pts: 0 }
                  ]
                }
              ]
            }
          ]
        }
      }
    }
  ]
};
