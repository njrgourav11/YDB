import React from 'react';

interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = '', width, height }) => (
  <div 
    className={`animate-pulse bg-gray-200 rounded ${className}`}
    style={{ width, height }}
  />
);

export const BlogSkeleton = () => (
  <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 overflow-hidden animate-pulse">
    <div className="h-48 bg-gray-200" />
    <div className="p-6 space-y-3">
      <div className="h-5 bg-gray-200 rounded w-2/3" />
      <div className="h-4 bg-gray-200 rounded w-full" />
      <div className="h-4 bg-gray-200 rounded w-5/6" />
      <div className="h-4 bg-gray-200 rounded w-1/2" />
    </div>
  </div>
);

export const ResearchSkeleton = () => (
  <div className="bg-white rounded-2xl p-8 shadow-sm animate-pulse">
    <div className="h-6 bg-gray-200 rounded w-3/4 mb-4" />
    <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
    <div className="h-20 bg-gray-200 rounded mb-4" />
    <div className="flex gap-4">
      <div className="h-4 bg-gray-200 rounded w-20" />
      <div className="h-4 bg-gray-200 rounded w-20" />
      <div className="h-4 bg-gray-200 rounded w-32" />
    </div>
  </div>
);

export const TeamMemberSkeleton = () => (
  <div className="text-center animate-pulse">
    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4" />
    <div className="h-5 bg-gray-200 rounded w-3/4 mx-auto mb-2" />
    <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-1" />
    <div className="h-3 bg-gray-200 rounded w-2/3 mx-auto" />
  </div>
);