import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUsers, FaCheck, FaUser, FaList } from "react-icons/fa";

const aulas = [
  {
    id: 1,
    curso: "CIÊNCIA DA COMPUTAÇÃO",
    materia: "Inteligência Artificial",
    professor: "Prof. Ricardo Oliveira",
    horario: "08:00 - 10:00",
    sala: "Sala 305",
    alunos: 6,
    presenca: { presentes: 4, atrasados: 1, ausentes: 1 },
    lista: [
      { name: "Ana Silva", time: "07:50", status: "present" },
      { name: "Carla Oliveira", time: "07:55", status: "present" },
      { name: "Gabriela Pereira", time: "07:58", status: "present" },
      { name: "Isabela Rocha", time: "07:59", status: "present" },
      { name: "Bruno Costa", time: "08:20", status: "late" },
    ],
  },
  {
    id: 2,
    curso: "ENGENHARIA DE SOFTWARE",
    materia: "Banco de Dados",
    professor: "Prof. Mariana Lima",
    horario: "10:15 - 12:15",
    sala: "Sala 210",
    alunos: 8,
    presenca: { presentes: 5, atrasados: 2, ausentes: 1 },
    lista: [
      { name: "Lucas Mendes", time: "10:10", status: "present" },
      { name: "Fernanda Souza", time: "10:12", status: "present" },
      { name: "Tiago Ferreira", time: "10:14", status: "present" },
      { name: "Juliana Costa", time: "10:16", status: "late" },
    ],
  },
];

export default function AgendaAulas() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="container mx-auto p-4">
        <div className="text-center mb-8">
          <h1 className="text-blue-600 font-semibold">CONTROLE DE FREQUÊNCIA</h1>
          <h2 className="text-3xl font-bold">Agenda de Aulas</h2>
          <div className="mt-4 inline-flex items-center bg-white border rounded-lg px-4 py-2 shadow-sm">
            <FaCalendarAlt className="text-gray-500 mr-2" />
            <span>06 De Novembro, 2023</span>
          </div>
          <p className="mt-2 text-gray-500">{aulas.length} aulas encontradas</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aulas.map((aula) => (
            <div key={aula.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="bg-blue-100 text-blue-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    {aula.curso}
                  </span>
                  <h3 className="text-xl font-bold">{aula.materia}</h3>
                  <p className="text-gray-500">{aula.professor}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 flex items-center"><FaClock className="mr-1" /> {aula.horario}</p>
                  <p className="text-gray-500 flex items-center"><FaMapMarkerAlt className="mr-1" /> {aula.sala}</p>
                  <p className="text-gray-500 flex items-center"><FaUsers className="mr-1" /> {aula.alunos} alunos</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                <span className="bg-green-100 text-green-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Presentes: {aula.presenca.presentes}</span>
                <span className="bg-yellow-100 text-yellow-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Atrasados: {aula.presenca.atrasados}</span>
                <span className="bg-red-100 text-red-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Ausentes: {aula.presenca.ausentes}</span>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2 flex items-center"><FaList className="mr-2" /> Lista de Presença</h4>
                <ul>
                  {aula.lista.map((student, index) => (
                    <li
                      key={index}
                      className={`flex items-center justify-between p-2 rounded-lg mb-2 ${student.status === "present" ? "bg-green-50" : "bg-yellow-50"
                        }`}
                    >
                      <div className="flex items-center">
                        <FaUser className="text-gray-500 mr-2" />
                        <span>{student.name}</span>
                      </div>
                      <div className="text-right flex items-center">
                        <span className="text-gray-500 flex items-center">
                          <FaClock className="mr-1" /> {student.time}
                        </span>
                        {student.status === "present" ? (
                          <FaCheck className="text-green-500 ml-2" />
                        ) : (
                          <FaClock className="text-yellow-500 ml-2" />
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}