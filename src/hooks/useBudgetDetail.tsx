import { useEffect, useState } from "react";

// import { useToast } from "contexts/Toast";

import { BudgetDetail, Titulo, Totalizacao } from "interfaces/Budgets";

import { getBudgetDetail } from "services/get/GetBudget";

export function useBudgetDetail(id: string | null) {
  // const { toast } = useToast();

  const [loading, setLoading] = useState(false); // Loading
  const [, /* budgets */ setBudgets] = useState<BudgetDetail[]>([]);
  // const [projects, setProjects] = useState<Project[]>([]);
  const [budgetFilter, setBudgetsFilter] = useState<BudgetDetail[]>([]);
  // const [projectSelected, setProjectSelected] = useState("");
  const [titulo, setTitulo] = useState<Titulo>();
  const [totalizacao, setTotalizacao] = useState<Totalizacao>();

  const wd = window.innerWidth;

  const gerarBudgetsList = async () => {
    const data = await getBudgetDetail(id);

    setBudgets(data.list);
    setBudgetsFilter(data.list);

    setTitulo(data.titulo);
    setTotalizacao(data.totalizacao);
    setLoading(false);
  };

  /* const filterByProject = () => {
    setLoading(true);
    const filtered = budgets.filter(
      (b) => b.projeto.id.toString() === projectSelected
    );

    if (filtered) {
      setBudgetsFilter([...filtered]);
    }

    setLoading(false);
  }; */

  /*  const handleProjectChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setProjectSelected(e.target.value);
  }; */

  useEffect(() => {
    gerarBudgetsList();
  }, []);

  return {
    budgetFilter,
    loading,
    wd,
    // projects,
    titulo,
    totalizacao,
  };
}
