'use client';

import React from 'react';
import type useEmblaCarousel from 'embla-carousel-react';

import { useCarousel } from '@/components/ui/carousel';

export type TCarouselAbi = ReturnType<typeof useEmblaCarousel>[1];
export type TCarouselRef = ReturnType<typeof useEmblaCarousel>[0];

export interface IUseCommonCarousel {
  api: TCarouselAbi | undefined;
  carouselRef: TCarouselRef;
  selectedIndex: number;
  scrollSnaps: number[];
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
  onSelect: (emblaApi: TCarouselAbi) => void;
  onDotButtonClick: (index: number) => void;
  onInit: (emblaApi: TCarouselAbi) => void;
}

export const useCommonCarousel = (): IUseCommonCarousel => {
  const { api, carouselRef } = useCarousel();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);
  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true);

  const onPrevButtonClick = React.useCallback(() => {
    if (!api) return;
    api.scrollPrev();
  }, [api]);

  const onNextButtonClick = React.useCallback(() => {
    if (!api) return;
    api.scrollNext();
  }, [api]);

  const onSelect = React.useCallback((emblaApi: TCarouselAbi) => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  const onDotButtonClick = React.useCallback(
    (index: number) => {
      if (!api) return;

      api.scrollTo(index);
    },
    [api]
  );

  const onInit = React.useCallback((emblaApi: TCarouselAbi) => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi?.scrollSnapList());
  }, []);

  const onAutoPlay = React.useCallback((emblaApi: TCarouselAbi) => {
    if (!emblaApi) return;
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    (autoplay as any).play();
  }, []);

  React.useEffect(() => {
    if (!api) return;

    onInit(api);
    onSelect(api);
    onAutoPlay(api);

    api.on('reInit', onInit);
    api.on('reInit', onSelect);
    api.on('select', onSelect);
  }, [api, onAutoPlay, onInit, onSelect]);

  return {
    api,
    carouselRef,
    selectedIndex,
    scrollSnaps,
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
    onSelect,
    onDotButtonClick,
    onInit,
  };
};
