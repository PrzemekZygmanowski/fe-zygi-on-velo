"use client";
import { sampleLinks } from "@/data/links";
import Link from "next/link";
import React, { useState } from "react";

export const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(v => !v);
  const toggleDesktopDropdown = (label: string) =>
    setOpenDesktop(cur => (cur === label ? null : label));
  const toggleMobileSub = (label: string) =>
    setOpenMobile(cur => (cur === label ? null : label));

  return (
    <nav className='relative z-50 overflow-visible bg-neutral-light shadow-lg'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 justify-between'>
          <div className='flex items-center'>
            <Link
              href='/'
              className='font-display text-xl font-bold text-forest'>
              ZygiOnVelo
            </Link>
          </div>
          <div className='hidden items-center space-x-6 md:flex'>
            {sampleLinks.map(item => {
              const hasChildren = !!item.children?.length;

              if (!hasChildren) {
                return (
                  <Link
                    key={item.href ?? item.label}
                    href={item.href ?? "#"}
                    className='font-sans text-neutral-dark transition-colors hover:text-sun'>
                    {item.label}
                  </Link>
                );
              }

              const isOpenDropdown = openDesktop === item.label;
              return (
                <div key={item.label} className='relative'>
                  <button
                    type='button'
                    onClick={() => toggleDesktopDropdown(item.label)}
                    aria-haspopup='menu'
                    aria-expanded={isOpenDropdown}
                    className='inline-flex items-center gap-1 font-sans text-neutral-dark transition-colors hover:text-sun'>
                    {item.label}
                    <svg
                      className={`h-4 w-4 transition-transform ${
                        isOpenDropdown ? "rotate-180" : ""
                      }`}
                      viewBox='0 0 20 20'
                      fill='currentColor'>
                      <path d='M5.23 7.21a.75.75 0 011.06.02L10 11.2l3.71-3.97a.75.75 0 111.08 1.04l-4.25 4.55a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z' />
                    </svg>
                  </button>

                  {isOpenDropdown && (
                    <div
                      role='menu'
                      className='absolute left-0 mt-2 w-56 rounded-lg bg-neutral-light p-2 shadow-lg ring-1 ring-black/5 z-50 pointer-events-auto'
                      onMouseLeave={() => setOpenDesktop(null)}>
                      {item.children!.map(child => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className='block rounded px-3 py-2 font-sans text-neutral-dark hover:bg-neutral-light hover:text-sun'
                          onClick={() => setOpenDesktop(null)}
                          role='menuitem'>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className='flex items-center md:hidden'>
            <button
              onClick={toggleMenu}
              aria-label='Otwórz menu'
              className='text-neutral-dark hover:text-sky focus:outline-none'>
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                {isOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className='z-40 md:hidden'>
          <div className='space-y-1 bg-white px-2 pt-2 pb-3 shadow-lg sm:px-3'>
            {sampleLinks.map(item => {
              const hasChildren = !!item.children?.length;

              if (!hasChildren) {
                return (
                  <Link
                    key={item.href ?? item.label}
                    href={item.href ?? "#"}
                    className='block rounded px-3 py-2 font-sans text-neutral-dark transition-colors hover:bg-neutral-light hover:text-sky'
                    onClick={() => setIsOpen(false)}>
                    {item.label}
                  </Link>
                );
              }

              const isSubOpen = openMobile === item.label;

              return (
                <div key={item.label} className='rounded'>
                  <button
                    type='button'
                    onClick={() => toggleMobileSub(item.label)}
                    className='flex w-full items-center justify-between rounded px-3 py-2 font-sans text-neutral-dark hover:bg-neutral-light hover:text-sky'
                    aria-expanded={isSubOpen}>
                    <span>{item.label}</span>
                    <svg
                      className={`h-4 w-4 transition-transform ${
                        isSubOpen ? "rotate-180" : ""
                      }`}
                      viewBox='0 0 20 20'
                      fill='currentColor'>
                      <path d='M5.23 7.21a.75.75 0 011.06.02L10 11.2l3.71-3.97a.75.75 0 111.08 1.04l-4.25 4.55a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z' />
                    </svg>
                  </button>

                  <div className={`${isSubOpen ? "block" : "hidden"} pl-4`}>
                    {item.children!.map(child => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className='block rounded px-3 py-2 font-sans text-neutral-dark/90 hover:bg-neutral-light hover:text-sky'
                        onClick={() => {
                          setIsOpen(false);
                          setOpenMobile(null);
                        }}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};
