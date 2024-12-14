import React from 'react';
import { Send } from 'lucide-react';

interface ProblemInputProps {
  onSubmit: (problem: string) => void;
}

export function ProblemInput({ onSubmit }: ProblemInputProps) {
  const [problem, setProblem] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (problem.trim()) {
      onSubmit(problem);
      setProblem('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex gap-2">
        <textarea
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          placeholder="请描述您的问题（例如：如何计算每月应该存多少钱才能在5年内攒够首付）"
          className="flex-1 p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 min-h-[120px] resize-none"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 h-fit"
        >
          <Send size={20} />
          提交
        </button>
      </div>
    </form>
  );
}