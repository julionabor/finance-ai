"use client";

import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import TransactionTypeBadge from "./_components/type-badge";
import {
  TRANSACTION_CATEGORY_LABELS,
  TRANSACTION_PAYMENT_METHOD_LABELS,
} from "@/app/_constants/transactions";
import {  TrashIcon } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import EditTransactionButton from "./_components/edit-transactions-button";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => (
      <TransactionTypeBadge transaction={transaction} />
    ),
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({ row: { original: transaction } }) =>
      TRANSACTION_CATEGORY_LABELS[transaction.category], // Map the category to a human-readable string.
  },
  {
    accessorKey: "paymentMethod",
    header: "Método de Pagamento",
    cell: ({ row: { original: transaction } }) =>
      TRANSACTION_PAYMENT_METHOD_LABELS[transaction.paymentMethod], // Map the category to a human-readable string.
  },
  {
    accessorKey: "date",
    header: "Data",
    cell: ({ row: { original: transaction } }) =>
      new Date(transaction.date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }), // Format the date to a human-readable string.
  },
  {
    accessorKey: "amount",
    header: "Valor",
    cell: ({ row: { original: transaction } }) =>
      new Intl.NumberFormat("pt-PT", {
        style: "currency",
        currency: "EUR",
      }).format(Number(transaction.amount)), // Format the amount to a human-readable string.
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: ({row: {original: transaction}}) => (
      <div className="space-x-1">
     <EditTransactionButton transaction={transaction} />
      <Button variant="ghost" size="icon" className="text-muted-foreground">
        <TrashIcon />
      </Button>
      </div>
    ),
  },
];
