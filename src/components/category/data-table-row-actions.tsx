'use client';

//next
import Link from 'next/link';

//table
import { Row } from '@tanstack/react-table';

//component
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui';

//model
import { Category } from '@/models';

//icon
import { LuMoreHorizontal } from 'react-icons/lu';

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row
}: DataTableRowActionsProps<TData>) {
  const categoryId = (row.original as Category).id;

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <LuMoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <Link href={`/management/category/${categoryId}`}>
          <DropdownMenuContent align="end" className="w-[160px]">
            <DropdownMenuItem>Chỉnh sửa</DropdownMenuItem>
          </DropdownMenuContent>
        </Link>
      </DropdownMenu>
    </>
  );
}
