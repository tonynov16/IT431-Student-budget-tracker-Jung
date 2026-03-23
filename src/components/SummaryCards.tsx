import type { BudgetSummary } from "../types";

// TODO 1: Define a TypeScript interface called "SummaryCardsProps" with one property:
//         - summary: BudgetSummary
interface SummaryCardsProps {
  summary: BudgetSummary;
}
// TODO 2: Update the function signature to accept the props using your interface.
//         Use destructuring: function SummaryCards({ summary }: SummaryCardsProps)

function SummaryCards({ summary }: SummaryCardsProps) {
  // Helper function to format a number as currency
  const formatCurrency = (amount: number): string => {
    return "$" + Math.abs(amount).toFixed(2);
  };

  return (
    <div className="summary">
      {/* TODO 3: Create three summary cards for Income, Expenses, and Balance.
          
          Each card should look like:
          <div className="summary-card income">    (use "income", "expenses", or "balance" as the second class)
            <div className="label">Total Income</div>
            <div className="amount">{formatCurrency(summary.totalIncome)}</div>
          </div>

          For the Balance card, add the class "negative" when the balance is less than 0:
          className={`summary-card balance ${summary.balance < 0 ? "negative" : ""}`}
          
          Show a "-" prefix for negative balances.
      */}
      {/* Income Card */}
      <div className="summary-card income">
        <div className="label">Total Income</div>
        <div className="amount">{formatCurrency(summary.totalIncome)}</div>
      </div>

      {/* Expenses Card */}
      <div className="summary-card expenses">
        <div className="label">Total Expenses</div>
        <div className="amount">{formatCurrency(summary.totalExpenses)}</div>
      </div>

      {/* Balance Card */}
      <div className={`summary-card balance ${summary.balance < 0 ? "negative" : ""}`}>
        <div className="label">Balance</div>
        <div className="amount">
          {summary.balance < 0 ? "-" : ""}
          {formatCurrency(summary.balance)}
        </div>
      </div>
    </div>
  );
}

export default SummaryCards;
