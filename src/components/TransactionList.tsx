import { useState } from "react";
import type { Transaction, Category } from "../types";
import TransactionItem from "./TransactionItem";

// TODO 1: Define a TypeScript interface called "TransactionListProps" with:
//         - transactions: Transaction[]
//         - onDeleteTransaction: a function that takes (id: number) and returns void

interface TransactionListProps {
  transactions: Transaction[];
  onDeleteTransaction: (id: number) => void;
}

const categoryFilters: ("ALL" | Category)[] = [
  "All",
  "Food",
  "Transport",
  "Entertainment",
  "Shopping",
  "Bills",
  "Income",
  "Other",
];

// TODO 2: Update the function signature to accept props using your interface.

function TransactionList({ transactions, onDeleteTransaction }: TransactionListProps) {
  // TODO 3: Create a state variable called "activeFilter" of type ("All" | Category),
  //         initialized to "All"
const [activeFilter, setActiveFilter] = useState<"ALL" | Category>("ALL");
  // TODO 4: Create a "filteredTransactions" variable that:
  //         - If activeFilter is "All", returns all transactions
  //         - Otherwise, returns only transactions matching the selected category
  //         Hint: Use a ternary with .filter()

const filteredTransactions =
  activeFilter === "ALL"
    ? transactions
    : transactions.filter((t) => t.category === activeFilter);

  return (
    <div className="transactions-card">
      <div className="transactions-header">
        <h2>📋 Transactions</h2>
        <span className="transaction-count">
          {filteredTransactions.length}{" "}
          {filteredTransactions.length === 1 ? "item" : "items"}
        </span>
      </div>

      {/* Filter Buttons */}
      <div className="filter-bar">
       {categoryFilters.map((filter) => (
        <button
          key={filter}
          className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
          onClick={() => setActiveFilter(filter)}
        >
          {filter}
        </button>
       ))}
      </div>

      {/* Transaction Items */}
      <div className="transaction-list">
        {filteredTransactions.length === 0 ? (
               <div className="empty-state">
                 <div className="empty-icon">💰</div>
                 <p>No transactions yet</p>
                 <p className="hint">Add your first transaction to get started</p>
               </div>
              ) : (
                filteredTransactions.map((transaction) => (
                  <TransactionItem
                    key={transaction.id}
                    transaction={transaction}
                    onDelete={onDeleteTransaction}
                />
              ))
            )}
      </div>
    </div>
  );
}

export default TransactionList;
