const alunos = [
    { nome: 'João', nota: 7.5 },
    { nome: 'Maria', nota: 5.8 },
    { nome: 'Ana', nota: 8.2 },
    { nome: 'Pedro', nota: 4.9 },
    { nome: 'Lucas', nota: 6.3 },
    { nome: 'Clara', nota: 3.7 },
  ];
  
  const filtrarAprovados = (alunos) => {
    return alunos.filter(aluno => aluno.nota >= 6);
  };
  
  const App = () => {
    const alunosAprovados = filtrarAprovados(alunos);
  }