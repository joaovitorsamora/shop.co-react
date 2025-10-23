import { useParams } from 'react-router-dom';
import { DefaultPage } from '../../components/DefaultPage';
import { useEffect, useState } from 'react';
import { ProductType } from '../../types/ProductType';
import { ProductCard } from '../../components/shared/ProductCard';
import { useFetchProducts } from '../../hooks/useFetchProducts';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../../components/ui/pagination';
import { FilterMenu } from '../../components/Filter';
import debounce from 'lodash.debounce';

export const CategoryPage = () => {
  const { category } = useParams();
  const { products } = useFetchProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [isTabletScreen, setIsTabletScreen] = useState(false);

  const totalPage = Math.ceil(products.length / itemsPerPage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const handleSize = () => {
      setIsMobileScreen(window.innerWidth <= 425);
      setIsTabletScreen(window.innerWidth >= 768 && window.innerWidth <= 1024);
    };

    const debounceSize = debounce(handleSize, 200);
    window.addEventListener('resize', debounceSize);
    return () => window.removeEventListener('resize', debounceSize);
  }, []);

  const filterCategory = products.filter((t: ProductType) => t.style === category);

  let limitItemsPerPage = itemsPerPage;

  if (isMobileScreen) {
    limitItemsPerPage = itemsPerPage / 3;
  } else if (isTabletScreen) {
    limitItemsPerPage = itemsPerPage / 2;
  }

  const indexOfLastPage = currentPage * limitItemsPerPage;

  const indexOfFirstPage = indexOfLastPage - limitItemsPerPage;

  const currentItems = filterCategory.slice(indexOfFirstPage, indexOfLastPage);

  return (
    <DefaultPage className="min-h-screen">
      <div className="grid-layout gap-4 ">
        <h2 className="area-header text-black text-2xl font-bold font-poppins">
          {category?.toUpperCase()}
        </h2>

        <FilterMenu className="area-aside" />

        <div className="area-main flex flex-col">
          {currentItems.length !== 0 ? (
            <div className="grid 2xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
              {currentItems.map(t => (
                <ProductCard key={t.id} product={t} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 font-poppins">
              Nenhum produto encontrado para a categoria "{category}"
            </div>
          )}

          <Pagination className="mt-auto">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  className="cursor-pointer"
                  onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                />
              </PaginationItem>

              {Array.from({ length: totalPage }, (_, i) => {
                const pageNum = i + 1;
                return (
                  <PaginationItem key={pageNum}>
                    <PaginationLink
                      className="cursor-pointer"
                      onClick={() => handlePageChange(pageNum)}
                    >
                      {pageNum}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}

              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>

              <PaginationItem>
                <PaginationNext
                  className="cursor-pointer"
                  onClick={() => currentPage < totalPage && handlePageChange(currentPage + 1)}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </DefaultPage>
  );
};
