import React from 'react';
import { BrainCog } from 'lucide-react';
import { ProblemInput } from './components/ProblemInput';
import { ResultDisplay } from './components/ResultDisplay';

function App() {
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<{
    code?: string;
    result?: string;
    image?: string;
  }>({});

  const handleProblemSubmit = async (problem: string) => {
    setLoading(true);
    // TODO: 在这里集成 AI 服务来生成 MATLAB 代码
    // 目前使用模拟数据演示界面
    setTimeout(() => {
      setResult({
        code: `% 示例 MATLAB 代码
function result = calculateSavings(years, target)
    monthlyRate = 0.003;  % 月利率 3.6% 年化
    months = years * 12;
    
    % 计算每月需要存储的金额
    monthlyPayment = (target * monthlyRate) / ...
        (1 - (1 + monthlyRate)^(-months));
    
    result = monthlyPayment;
end`,
        result: '根据计算，要在5年内攒够30万首付，每月需要存储约4,823元。',
        image: 'https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=800&q=80'
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BrainCog size={40} className="text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">MATLAB AI 问题求解助手</h1>
          </div>
          <p className="text-gray-600">
            输入您的实际问题，AI 将生成 MATLAB 代码并为您计算结果
          </p>
        </header>

        <main className="space-y-8">
          <ProblemInput onSubmit={handleProblemSubmit} />
          <ResultDisplay loading={loading} {...result} />
        </main>
      </div>
    </div>
  );
}

export default App;