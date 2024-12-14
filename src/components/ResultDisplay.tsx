import React from 'react';
import { LineChart, Code } from 'lucide-react';

interface ResultDisplayProps {
  code?: string;
  result?: string;
  image?: string;
  loading?: boolean;
}

export function ResultDisplay({ code, result, image, loading }: ResultDisplayProps) {
  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {code && (
        <div className="rounded-lg bg-gray-900 p-4">
          <div className="flex items-center gap-2 text-gray-400 mb-2">
            <Code size={20} />
            <span>生成的 MATLAB 代码</span>
          </div>
          <pre className="text-gray-100 overflow-x-auto">
            <code>{code}</code>
          </pre>
        </div>
      )}

      {result && (
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            <LineChart size={20} />
            <span>计算结果</span>
          </div>
          <p className="text-gray-800">{result}</p>
        </div>
      )}

      {image && (
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <img src={image} alt="计算结果图表" className="w-full rounded-lg" />
        </div>
      )}
    </div>
  );
}