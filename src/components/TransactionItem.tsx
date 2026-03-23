import type { Transaction, Category } from "../types";

// TODO 1: Define a TypeScript interface called "TransactionItemProps" with:
//         - transaction: Transaction
//         - onDelete: a function that takes (id: number) and returns void
interface TransactionItemProps {
  transaction: Transaction;
  onDelete: (id: number) => void;
}
// These maps are provided for you — they connect categories to emojis and CSS classes
const categoryEmojis: Record<Category, string> = {
  Food: "🍔",
  Transport: "🚗",
  Entertainment: "🎮",
  Shopping: "🛍️",
  Bills: "📄",
  Income: "💵",
  Other: "📦",
};

const categoryClasses: Record<Category, string> = {
  Food: "food",
  Transport: "transport",
  Entertainment: "entertainment",
  Shopping: "shopping",
  Bills: "bills",
  Income: "income-cat",
  Other: "other",
};

// TODO 2: Update the function signature to accept props using your interface.

function TransactionItem({ transaction, onDelete }: TransactionItemProps){ 
  const formatCurrency = (amount: number): string => {
    return "$" + amount.toFixed(2);
  };

  return (
    <div className="transaction-item">
      <div className="transaction-info">
        {/* TODO 3: Render the category icon
            Use categoryEmojis[transaction.category] for the emoji
            Use categoryClasses[transaction.category] for the CSS class
            
            <div className={`category-icon ${categoryClasses[transaction.category]}`}>
              {categoryEmojis[transaction.category]}
            </div>
        */}
        <div className={`category-icon ${categoryClasses[transaction.category]}`}>
          {categoryEmojis[transaction.category]}
        </div>

        <div className="transaction-details">
          {/* TODO 4: Display the transaction description */}
         <div className="transaction-description">
          {transaction.description}
         </div>
          {/* TODO 5: Display the category and date */}
          <div className="transaction-meta">
            <span>{transaction.category}</span>
            <span>•</span>
            <span>{transaction.date}</span>
          </div>
        </div>
      </div>
      <div className="transaction-right">
        {/* TODO 6: Display the amount with proper formatting
            - Show "-" prefix for expenses, "+" for income
            - Use className "transaction-amount income" or "transaction-amount expense"
            Hint: className={`transaction-amount ${transaction.type}`}
        */}
        <span className={`transaction-amount ${transaction.type}`}>
          {transaction.type === "expense" ? "-" : "+"}
          {formatCurrency(transaction.amount)}
        </span>

        {/* TODO 7: Add a delete button that calls onDelete with the transaction's id */}
        <button 
        className="delete-btn"
        onClick={() => onDelete(transaction.id)}
        title="Delete transaction"
        > 
          ×
        </button>
      </div>
    </div>
  );
}

export default TransactionItem;
