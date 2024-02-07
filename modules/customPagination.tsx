import React, { useState } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function CustomPagination({ totalPage }:{totalPage:number}) {
  const [activePage, setActivePage] = useState(1);

  // Helper function to handle click on pagination link
  const handlePageClick = (pageNumber:number) => {
    setActivePage(pageNumber);
  };

  // Helper function to generate pagination items
  const generatePaginationItems = () => {
    const items = [];

    // Previous button (hidden when on first page)
    if (activePage > 1) {
      items.push(
        <PaginationItem key="prev">
          <PaginationPrevious href="#" onClick={() => handlePageClick(activePage - 1)} />
        </PaginationItem>
      );
    }

    // Pagination links with ellipses
    for (let i = 1; i <= totalPage; i++) {
      if (i === 1 || i === totalPage || (i >= activePage - 2 && i <= activePage + 2)) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink href="#" isActive={i === activePage} onClick={() => handlePageClick(i)}>
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      } else if (i === activePage - 3 || i === activePage + 3) {
        items.push(
          <PaginationItem key="ellipsis">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
    }

    // Next button (hidden when on last page)
    if (activePage < totalPage) {
      items.push(
        <PaginationItem key="next">
          <PaginationNext href="#" onClick={() => handlePageClick(activePage + 1)} />
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <Pagination>
      <PaginationContent className='flex-wrap'>
        {generatePaginationItems()}
      </PaginationContent>
    </Pagination>
  );
}


