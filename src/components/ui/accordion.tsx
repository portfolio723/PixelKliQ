'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronRight } from 'lucide-react';
import { forwardRef, type ComponentPropsWithoutRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export const Accordions = forwardRef<
  HTMLDivElement,
  | Omit<AccordionPrimitive.AccordionSingleProps, 'value' | 'onValueChange'>
  | Omit<AccordionPrimitive.AccordionMultipleProps, 'value' | 'onValueChange'>
>(({ type = 'single', className, defaultValue, ...props }, ref) => {
  const [value, setValue] = useState<string | string[]>(
    type === 'single' ? (defaultValue ?? '') : (defaultValue ?? [])
  );
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const id = window.location.hash.substring(1);
      if (id.length > 0) {
        setValue((prev) => (typeof prev === 'string' ? id : [id, ...prev]));
      }
    }
  }, [isClient]);

  return (
    <AccordionPrimitive.Root
      type={type}
      ref={ref}
      value={value}
      onValueChange={setValue}
      collapsible={type === 'single' ? true : undefined}
      className={cn(
        'divide-y divide-border overflow-hidden rounded-lg border bg-card',
        className
      )}
      {...props}
    />
  );
});

Accordions.displayName = 'Accordions';

export const Accordion = forwardRef<
  HTMLDivElement,
  Omit<ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>, 'value'> & {
    title: string;
  }
>(({ title, className, id, children, ...props }, ref) => {
  return (
    <AccordionPrimitive.Item
      ref={ref}
      value={id ?? title}
      className={cn('group/accordion relative scroll-m-20', className)}
      {...props}
    >
      <AccordionPrimitive.Header
        id={id}
        className="not-prose flex flex-row items-center font-medium text-foreground"
      >
        <AccordionPrimitive.Trigger 
          className="flex flex-1 items-center gap-2 p-4 text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <ChevronRight 
            className="-ms-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]/accordion:rotate-90" 
          />
          {title}
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Content 
        className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      >
        <div className="text-muted-foreground p-4 pt-0 prose-no-margin">{children}</div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  );
});


Accordion.displayName = 'Accordion';
