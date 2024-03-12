import { useState } from 'react';

//component
import { columns } from '@/components/category';
import { AdminLayout } from '@/components/layout';
import { Loading } from '@/components/ui';
import { DataTable } from '@/components/ui/data-table';

//hook
import { useStatisticCategories } from '@/hooks';

//mode
import { NextPageWithLayout } from '@/models';

//table
import { PaginationState } from '@tanstack/react-table';

const CategoryManagementPage: NextPageWithLayout = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5
  });

  const { categories, meta, isLoading } = useStatisticCategories({
    page: pagination.pageIndex + 1,
    size: pagination.pageSize,
    takeAll: true
  });

  return (
    <div className="w-full px-8 py-20">
      <h1 className="text-[32px] leading-[48px] font-bold mb-7">
        Quản lý thể loại
      </h1>

      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <DataTable
            data={categories ?? []}
            columns={columns}
            pagination={pagination}
            setPagination={setPagination}
            meta={meta}
          />
        )}
      </div>
    </div>
  );
};

CategoryManagementPage.Layout = AdminLayout;

export default CategoryManagementPage;
