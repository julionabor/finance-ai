import React from "react";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";
import AddTransactionButton from "../_components/add-transaction-button";
const TransactionsPage = async () => {
  // Acessar transações da BD
  const transactions = await db.transaction.findMany({});
  return (
    <div className="space-y-6 p-6">
      <div className="flex w-full items-center justify-between">
        <h1>Transactions</h1>
        <AddTransactionButton />
      </div>
      <DataTable data={transactions} columns={transactionColumns} />
    </div>
  );
};

export default TransactionsPage;
