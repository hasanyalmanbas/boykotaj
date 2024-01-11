export function getRiskLevel(risk: string): {
  riskColor:
    | "secondary"
    | "warning"
    | "danger"
    | "default"
    | "primary"
    | "success"
    | undefined;
  riskValue: number;
} {
  switch (risk) {
    case "Az":
      return { riskColor: "secondary", riskValue: 1 };
    case "Orta":
      return { riskColor: "warning", riskValue: 2 };
    case "Cok":
      return { riskColor: "danger", riskValue: 3 };
    default:
      return { riskColor: "danger", riskValue: 3 };
  }
}

const columns = [
  { name: "", uid: "name", sortable: true },
  { name: "Ürün", uid: "brand", sortable: true },
  { name: "Durum", uid: "risk", sortable: true },
];

const statusOptions = [
  { name: "Boykot", uid: "Boykot" },
  { name: "Temiz", uid: "Temiz" },
];

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export { columns, statusOptions };
