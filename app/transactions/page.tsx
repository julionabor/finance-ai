import React from "react";
import { db } from "../_lib/prisma";
import { Button } from "../_components/ui/button";
import { ArrowDownUpIcon } from "lucide-react";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";
const TransactionsPage = async () => {
  // Acessar transações da BD
  const transactions = await db.transaction.findMany({});
  return (
    <div className="p-6 space-y-6">
      <div className="flex w-full justify-between items-center">
        <h1>Transactions</h1>
        <Button className="rounded-full font-bold"> Adicionar Transação <ArrowDownUpIcon/></Button>
      </div>
      <DataTable data={transactions} columns={transactionColumns} />
    </div>
  );
};

export default TransactionsPage;
