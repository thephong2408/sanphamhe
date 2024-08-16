"use client";
import React, { useState, useEffect, useMemo } from "react";
import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useDispatch } from "react-redux";
import { setPaginationData } from "@/app/redux/slices/paginationData";
import { FiChevronsRight } from "react-icons/fi";
import { FiChevronsLeft } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

// Define props interface
interface PaginationProps {
  filteredData: any[];
}

export default function PaginationData({ filteredData }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const dispatch = useDispatch();

  // Calculate page end, start index, end index, and current data
  const pageEnd = useMemo(
    () => Math.ceil(filteredData.length / 10),
    [filteredData.length]
  );
  const startIndex = useMemo(() => (currentPage - 1) * 10, [currentPage]);
  const endIndex = useMemo(() => currentPage * 10, [currentPage]);
  const currentData = useMemo(
    () => filteredData.slice(startIndex, endIndex),
    [filteredData, startIndex, endIndex]
  );

  // Generate pages array
  const pages = useMemo(() => {
    const pagesArray: number[] = [];
    for (let i = 1; i <= pageEnd; i++) {
      pagesArray.push(i);
    }
    return pagesArray;
  }, [pageEnd]);

  // Calculate pages to display
  const totalPagesToDisplay = 3;
  const start = useMemo(
    () => Math.max(currentPage - Math.floor(totalPagesToDisplay / 2), 1),
    [currentPage, totalPagesToDisplay]
  );
  const end = useMemo(
    () => Math.min(start + totalPagesToDisplay - 1, pageEnd),
    [start, totalPagesToDisplay, pageEnd]
  );
  const pagesToDisplay = useMemo(
    () => pages.slice(start - 1, end),
    [pages, start, end]
  );

  useEffect(() => {
    dispatch(setPaginationData(currentData));
    // console.log(currentData, "currentData");
  }, [currentPage, currentData, dispatch]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="mb-10">
      <div className="sm:py-10">
        <PaginationComponent className="mt-10 cursor-pointer">
          <PaginationContent>
            <span
              className="sm:text-[28px] text-[20px] "
              onClick={() => handlePageChange(1)}
            >
              <FiChevronsLeft />
            </span>
            <span
              className="sm:text-[28px] text-[20px] mr-4"
              onClick={() =>
                currentPage > 1 && handlePageChange(currentPage - 1)
              }
            >
              <FiChevronLeft />
            </span>
            <PaginationItem>
              {pagesToDisplay.map((item) => (
                <PaginationLink
                  key={item}
                  className={`sm:text-[18px] text-[15px] ${
                    item === currentPage
                      ? "font-bold border-[1px] bg-black text-white"
                      : ""
                  }`}
                  onClick={() => handlePageChange(item)}
                >
                  {item}
                </PaginationLink>
              ))}
            </PaginationItem>
            {pageEnd > totalPagesToDisplay && (
              <PaginationItem>
                <PaginationEllipsis className="sm:text-[18px] text-[12px]" />
              </PaginationItem>
            )}
            <span>
              <FiChevronRight
                className="sm:text-[28px] text-[20px] ml-4"
                onClick={() =>
                  currentPage < pageEnd && handlePageChange(currentPage + 1)
                }
              />
            </span>
            <span>
              {" "}
              <FiChevronsRight
                className="sm:size-[28px] size-[20px] "
                onClick={() => handlePageChange(pageEnd)}
              />
            </span>
          </PaginationContent>
        </PaginationComponent>
      </div>
    </div>
  );
}
