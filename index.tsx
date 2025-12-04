import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Leaf, 
  Wind, 
  Droplets, 
  Sun, 
  Activity, 
  Maximize2, 
  Camera, 
  AlertCircle, 
  Cpu, 
  Wifi, 
  BarChart3, 
  Video, 
  History, 
  ArrowRight,
  Upload,
  CheckCircle2,
  Crosshair,
  Map,
  Thermometer,
  Settings,
  Terminal,
  Database,
  Sprout,
  FlaskConical,
  Bug,
  Calendar,
  Waves,
  Scan,
  TrendingUp,
  ArrowLeft,
  RotateCcw,
  Plus
} from 'lucide-react';

// --- Types ---
type ViewMode = 'dashboard' | 'optimization' | 'diagnosis' | 'water' | 'mosquito';

// --- Main App Component ---
const App = () => {
  const [currentView, setCurrentView] = useState<ViewMode>('dashboard');

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentView} />;
      case 'optimization':
        return <LandscapeOptimization onBack={() => setCurrentView('dashboard')} />;
      case 'diagnosis':
        return <DiagnosisView onBack={() => setCurrentView('dashboard')} />;
      case 'water':
        return <WaterManagementView onBack={() => setCurrentView('dashboard')} />;
      case 'mosquito':
        return <MosquitoControlView onBack={() => setCurrentView('dashboard')} />;
      default:
        return <Dashboard onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="h-screen w-full flex flex-col bg-[#f4f4f0] overflow-hidden">
      {/* Header */}
      <Header currentView={currentView} onNavigate={setCurrentView} />

      {/* Content Area */}
      <main className="flex-1 w-full max-w-[2560px] mx-auto px-6 pb-6 flex flex-col relative overflow-hidden">
        {renderContent()}
      </main>
    </div>
  );
};

// --- Header Component ---
const Header = ({ currentView, onNavigate }: { currentView: ViewMode; onNavigate: (v: ViewMode) => void }) => (
  <header className="w-full max-w-[2560px] mx-auto flex justify-between items-center z-50 px-6 py-4">
    <div className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => onNavigate('dashboard')}>
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shadow-lg shadow-green-200/50">
        <Leaf className="text-white w-7 h-7" />
      </div>
      <div>
        <h1 className="text-3xl font-light tracking-wide text-gray-800">湘景智养 <span className="font-bold text-[#66BB6A]">AiGarden</span></h1>
        <div className="flex items-center gap-2">
           <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
           <p className="text-sm text-gray-500 tracking-wider">城市园林景观智能家庭养护系统</p>
        </div>
      </div>
    </div>

    <div className="flex items-center gap-4">
       <div className="neu-pressed px-5 py-2.5 flex items-center gap-3">
          <Cpu className="w-5 h-5 text-[#4FC3F7]" />
          <div className="flex flex-col items-start leading-tight">
             <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">主控芯片</span>
             <span className="text-sm font-semibold text-gray-700">ROC-RK3576-PC</span>
          </div>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-2"></div>
       </div>
       <div className="neu-pressed px-5 py-2.5 flex items-center gap-3">
          <Wifi className="w-5 h-5 text-[#4FC3F7]" />
          <div className="flex flex-col items-start leading-tight">
             <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">网络延迟</span>
             <span className="text-sm font-semibold text-gray-700">5毫秒</span>
          </div>
       </div>
       <button className="neu-btn w-12 h-12 flex items-center justify-center text-gray-500 hover:text-green-600">
          <Settings className="w-6 h-6" />
       </button>
    </div>
  </header>
);

// --- Dashboard View ---
const Dashboard = ({ onNavigate }: { onNavigate: (v: ViewMode) => void }) => {
  return (
    <div className="grid grid-cols-12 gap-5 h-full max-h-full">
      
      {/* LEFT COLUMN: Environment Sensors */}
      <div className="col-span-3 flex flex-col gap-5 h-full">
        <EnvironmentPanel />
      </div>

      {/* CENTER COLUMN: AI Vision Core & Monitoring */}
      <div className="col-span-6 flex flex-col gap-5 h-full">
        {/* 1. Live Feed - 4:3 Aspect Ratio */}
        <AIVisionFeed />
        
        {/* 2. New Data Monitoring Panel to fill whitespace */}
        <DataMonitoringPanel />
      </div>

      {/* RIGHT COLUMN: Functional Modules (Stacked & Filled) */}
      <div className="col-span-3 flex flex-col gap-5 h-full">
         {/* Top Card: Landscape Design */}
         <div className="flex-1 min-h-0">
            <FunctionCard 
              title="庭院景观优化设计" 
              icon={<Map className="text-green-600 w-5 h-5" />}
              actionLabel="一键优化"
              subtext="上次优化: 3天前"
              onClick={() => onNavigate('optimization')}
            >
              {/* Fixed background image display */}
              <div className="w-full h-full min-h-[120px] rounded-xl bg-gray-200 overflow-hidden relative mt-2 group cursor-pointer" onClick={() => onNavigate('optimization')}>
                  {/* Using a reliable architecture sketch/garden image */}
                  <img src="https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" alt="Landscape Design" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm text-green-700 font-bold shadow-lg">
                        开始设计
                    </div>
                  </div>
              </div>
            </FunctionCard>
         </div>

         {/* Grid for smaller function cards */}
         <div className="flex-[2] grid grid-rows-3 gap-5 min-h-0">
             <FunctionCard 
               title="AI 病害诊断" 
               icon={<Activity className="text-red-500 w-5 h-5" />}
               onClick={() => onNavigate('diagnosis')}
             >
                <div className="flex items-center justify-between h-full px-2 cursor-pointer group">
                   <div className="flex flex-col justify-center">
                      <span className="text-4xl font-light text-gray-700 group-hover:text-red-500 transition-colors">24</span>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">本周检测次数</span>
                   </div>
                   <div className="h-20 w-20 relative transform group-hover:scale-110 transition-transform">
                      {/* Pie Chart */}
                      <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                        <path className="text-gray-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                        <path className="text-red-400" strokeDasharray="15, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                        <path className="text-yellow-400" strokeDasharray="5, 100" strokeDashoffset="-15" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center flex-col">
                          <span className="text-[10px] text-gray-400">风险</span>
                          <span className="text-sm font-bold text-red-400">低</span>
                      </div>
                   </div>
                </div>
             </FunctionCard>

             <FunctionCard 
               title="水肥一体化" 
               icon={<Droplets className="text-[#4FC3F7] w-5 h-5" />}
               onClick={() => onNavigate('water')}
             >
                <div className="h-full flex flex-col justify-center gap-3 px-1 cursor-pointer group">
                   <div className="flex justify-between items-end">
                     <span className="text-sm text-gray-500 font-medium">下次滴灌计划</span>
                     <span className="text-lg font-bold text-[#4FC3F7] group-hover:text-blue-500 transition-colors">今日 14:00</span>
                   </div>
                   <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                            <span className="text-gray-400">水箱余量</span>
                            <span className="text-gray-600 font-bold">68%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                            <div className="bg-[#4FC3F7] h-full w-[68%] rounded-full group-hover:bg-blue-400 transition-colors"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                            <span className="text-gray-400">营养液</span>
                            <span className="text-gray-600 font-bold">42%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                            <div className="bg-green-400 h-full w-[42%] rounded-full"></div>
                        </div>
                      </div>
                   </div>
                </div>
             </FunctionCard>

             <FunctionCard 
               title="蚊虫生态捕捉" 
               icon={<Crosshair className="text-purple-500 w-5 h-5" />}
               onClick={() => onNavigate('mosquito')}
             >
                 <div className="flex justify-between items-center h-full px-2 cursor-pointer group">
                    <div className="flex flex-col">
                       <span className="text-4xl font-light text-gray-700 group-hover:text-purple-600 transition-colors">128</span>
                       <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">24h 捕获数</span>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                         <div className="w-24 h-16 neu-pressed rounded-lg relative overflow-hidden flex items-center justify-center border border-purple-100 group-hover:border-purple-300 transition-colors">
                             {/* Mock Radar View */}
                             <div className="absolute inset-0 bg-purple-50/50"></div>
                             <div className="w-full h-[1px] bg-purple-200 absolute top-1/2"></div>
                             <div className="h-full w-[1px] bg-purple-200 absolute left-1/2"></div>
                             <div className="w-1.5 h-1.5 bg-red-500 rounded-full absolute top-1/3 left-1/3 animate-ping"></div>
                         </div>
                         <span className="text-[10px] text-purple-400 font-bold">S20F 云台运行中</span>
                    </div>
                 </div>
             </FunctionCard>
         </div>
      </div>
    </div>
  );
};

// --- NEW DETAIL VIEWS ---

const DiagnosisView = ({ onBack }: { onBack: () => void }) => {
    const [isScanning, setIsScanning] = useState(false);
    const [scanProgress, setScanProgress] = useState(0);
    const [records, setRecords] = useState([
        { id: 1, name: '月季 - 黑斑病 (疑似)', confidence: '92%', location: '主庭院东南角 (Z-02区)', solution: '剪除病叶，并在傍晚喷洒代森锰锌溶液（浓度0.2%）。', date: '刚刚', image: 'https://images.unsplash.com/photo-1599598425947-632599fae55e?q=80&w=200&auto=format&fit=crop' },
        { id: 2, name: '绣球 - 缺铁性黄叶', confidence: '85%', location: '北墙阴生区 (Z-04区)', solution: '建议施用硫酸亚铁溶液进行灌根处理。', date: '2小时前', image: 'https://images.unsplash.com/photo-1588388487779-1f20d7710c95?q=80&w=200&auto=format&fit=crop' },
        { id: 3, name: '罗汉松 - 蚜虫', confidence: '78%', location: '主景观树 (Z-01区)', solution: '释放瓢虫生物防治，或喷洒吡虫啉。', date: '5小时前', image: 'https://images.unsplash.com/photo-1628172828628-912dfa1444d3?q=80&w=200&auto=format&fit=crop' }
    ]);

    const handleScan = () => {
        setIsScanning(true);
        setScanProgress(0);
    };

    useEffect(() => {
        if (isScanning) {
            const duration = 10000; // 10 seconds
            const interval = 100; // Update every 100ms
            const step = 100 / (duration / interval);

            const timer = setInterval(() => {
                setScanProgress(prev => {
                    const next = prev + step;
                    if (next >= 100) {
                        clearInterval(timer);
                        setIsScanning(false);
                        // Add random records
                        const newRecords = [
                             { id: Date.now(), name: '紫薇 - 白粉病', confidence: '88%', location: '西侧花坛 (Z-03区)', solution: '加强通风，喷洒粉锈宁可湿性粉剂。', date: '刚刚', image: 'https://images.unsplash.com/photo-1611565538356-d6265697669d?q=80&w=200&auto=format&fit=crop' },
                             { id: Date.now() + 1, name: '草坪 - 褐斑病', confidence: '81%', location: '中央草坪 (Z-05区)', solution: '控制浇水，修剪病斑草叶。', date: '刚刚', image: 'https://images.unsplash.com/photo-1574347209689-d125eb3a1050?q=80&w=200&auto=format&fit=crop' }
                        ];
                        setRecords(prevRecs => [...newRecords, ...prevRecs]);
                        return 100;
                    }
                    return next;
                });
            }, interval);
            return () => clearInterval(timer);
        }
    }, [isScanning]);

    return (
        <div className="w-full h-full flex flex-col animate-fadeIn">
            <div className="mb-6 flex items-center gap-6">
                <button onClick={onBack} className="neu-btn w-12 h-12 flex items-center justify-center rounded-full text-gray-500 hover:text-green-600">
                    <ArrowLeft className="w-6 h-6" />
                </button>
                <h2 className="text-3xl font-light text-gray-800">AI 病害诊断与防治 <span className="text-sm bg-red-100 text-red-600 px-3 py-1 rounded-full font-bold ml-2">实时监测中</span></h2>
            </div>
            
            <div className="grid grid-cols-12 gap-6 h-full min-h-0">
                {/* Left: Recent Detections */}
                <div className="col-span-8 neu-flat p-6 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold text-gray-700 flex items-center gap-2"><Scan className="w-5 h-5 text-red-500"/> 近期检测记录</h3>
                        {isScanning ? (
                            <div className="w-64 bg-gray-200 rounded-xl h-10 relative overflow-hidden">
                                <div className="absolute inset-0 bg-green-500 transition-all duration-100 ease-linear flex items-center justify-center text-xs font-bold text-white whitespace-nowrap" style={{width: `${scanProgress}%`}}>
                                    正在扫描中，请稍后... {Math.round(scanProgress)}%
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-500 mix-blend-multiply">
                                    正在扫描中，请稍后... {Math.round(scanProgress)}%
                                </div>
                            </div>
                        ) : (
                            <button onClick={handleScan} className="px-4 py-2 bg-green-500 text-white rounded-xl shadow hover:bg-green-600 text-sm font-bold flex items-center gap-2">
                                <Camera className="w-4 h-4" /> 立即全园扫描
                            </button>
                        )}
                    </div>
                    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-4">
                        {records.map((rec) => (
                            <div key={rec.id} className="neu-pressed p-4 rounded-xl flex gap-4 items-center animate-fadeIn">
                                <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                                    <img src={rec.image} className="w-full h-full object-cover" alt="Leaf" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between mb-1">
                                        <h4 className="font-bold text-gray-700">{rec.name}</h4>
                                        <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-bold">置信度 {rec.confidence}</span>
                                    </div>
                                    <p className="text-sm text-gray-500 mb-2">位置: {rec.location} | <span className="text-gray-400">{rec.date}</span></p>
                                    <div className="text-xs text-green-600 bg-green-50 p-2 rounded border border-green-100 flex items-start gap-1">
                                        <CheckCircle2 className="w-3 h-3 mt-0.5 flex-shrink-0"/>
                                        {rec.solution}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Right: Stats & Heatmap */}
                <div className="col-span-4 flex flex-col gap-6">
                    <div className="neu-flat p-6 flex-1 flex flex-col">
                        <h3 className="text-lg font-bold text-gray-700 mb-4 flex items-center gap-2"><TrendingUp className="w-5 h-5 text-blue-500"/> 健康趋势 (7天)</h3>
                        <div className="flex-1 flex items-end justify-between px-2 gap-3 pb-2 border-b border-gray-200">
                            {[40, 65, 50, 80, 45, 30, 24].map((h, i) => (
                                <div key={i} className="w-full flex flex-col items-center gap-2 group">
                                    <div className="w-full bg-gray-100 rounded-t-lg relative h-32 flex items-end overflow-hidden">
                                         <div className="w-full bg-gradient-to-t from-green-400 to-green-300 rounded-t-lg transition-all duration-500 group-hover:bg-green-500" style={{height: `${h}%`}}></div>
                                    </div>
                                    <span className="text-[10px] text-gray-400 font-mono">
                                        {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][i]}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="neu-flat p-6 h-72 flex flex-col">
                        <h3 className="text-lg font-bold text-gray-700 mb-4 flex items-center gap-2"><Map className="w-5 h-5 text-purple-500"/> 庭院健康热力图</h3>
                        <div className="flex-1 rounded-xl relative overflow-hidden border border-gray-200">
                            {/* Garden Plan Background */}
                            <img src="https://images.unsplash.com/photo-1524312662266-9e6584c3cb3e?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 grayscale" alt="Map" />
                            
                            {/* Heatmap Overlays - using radial gradients */}
                            <div className="absolute top-[20%] left-[30%] w-24 h-24 rounded-full bg-red-500 blur-2xl opacity-50 mix-blend-multiply animate-pulse"></div>
                            <div className="absolute bottom-[40%] right-[20%] w-20 h-20 rounded-full bg-yellow-400 blur-2xl opacity-60 mix-blend-multiply"></div>
                            <div className="absolute top-[60%] left-[10%] w-16 h-16 rounded-full bg-green-500 blur-2xl opacity-40 mix-blend-multiply"></div>
                            
                            {/* Location Pins */}
                            <div className="absolute top-[25%] left-[35%] w-3 h-3 bg-red-600 border-2 border-white rounded-full shadow-lg"></div>
                            <div className="absolute bottom-[45%] right-[25%] w-3 h-3 bg-yellow-500 border-2 border-white rounded-full shadow-lg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const WaterManagementView = ({ onBack }: { onBack: () => void }) => {
    // Water levels for Main and Backup tanks (0-100)
    const [mainLevel, setMainLevel] = useState(68);
    const [backupLevel, setBackupLevel] = useState(90);

    const handleFill = (tank: 'main' | 'backup') => {
        if (tank === 'main') setMainLevel(Math.min(100, mainLevel + 10));
        else setBackupLevel(Math.min(100, backupLevel + 10));
    };

    const handleDrain = (tank: 'main' | 'backup') => {
        if (tank === 'main') setMainLevel(0);
        else setBackupLevel(0);
    };

    const handleIrrigate = () => {
        // Decrease Main first, then Backup if Main is empty (simplified logic: just Main -5%)
        if (mainLevel > 0) {
            setMainLevel(Math.max(0, mainLevel - 5));
        } else if (backupLevel > 0) {
            setBackupLevel(Math.max(0, backupLevel - 5));
        }
    };

    return (
        <div className="w-full h-full flex flex-col animate-fadeIn">
            <div className="mb-6 flex items-center gap-6">
                <button onClick={onBack} className="neu-btn w-12 h-12 flex items-center justify-center rounded-full text-gray-500 hover:text-green-600">
                    <ArrowLeft className="w-6 h-6" />
                </button>
                <h2 className="text-3xl font-light text-gray-800">水肥一体化管理中心 <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-bold ml-2">自动模式</span></h2>
            </div>

            <div className="grid grid-cols-12 gap-6 h-full min-h-0">
                {/* Left: Dual Tank Status */}
                <div className="col-span-5 flex gap-4">
                     {/* Main Tank */}
                     <div className="neu-flat p-6 flex flex-col items-center flex-1 relative overflow-hidden">
                        <h3 className="text-lg font-bold text-gray-700 mb-4 z-10">主水箱</h3>
                        <div className="w-full flex-1 rounded-3xl bg-gray-200 border-4 border-white shadow-inner relative overflow-hidden mb-4">
                            <div className="absolute bottom-0 w-full bg-blue-400 transition-all duration-700 ease-in-out" style={{height: `${mainLevel}%`}}>
                                <div className="absolute top-0 w-full h-4 bg-blue-300 opacity-50 animate-pulse"></div>
                                {/* Bubbles */}
                                <div className="absolute bottom-2 left-4 w-2 h-2 bg-white/40 rounded-full animate-[ping_2s_infinite]"></div>
                                <div className="absolute bottom-6 right-8 w-1 h-1 bg-white/40 rounded-full animate-[ping_3s_infinite]"></div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center text-white/90 font-bold text-3xl drop-shadow-md z-10 mix-blend-overlay">{mainLevel}%</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 w-full z-10">
                            <button onClick={() => handleFill('main')} className="neu-btn py-2 text-blue-500 text-xs font-bold hover:bg-blue-50 flex flex-col items-center gap-1">
                                <Plus className="w-4 h-4" /> 补水
                            </button>
                            <button onClick={() => handleDrain('main')} className="neu-btn py-2 text-gray-500 text-xs font-bold hover:text-red-500 flex flex-col items-center gap-1">
                                <RotateCcw className="w-4 h-4" /> 排空
                            </button>
                        </div>
                     </div>

                     {/* Backup Tank */}
                     <div className="neu-flat p-6 flex flex-col items-center flex-1 relative overflow-hidden">
                        <h3 className="text-lg font-bold text-gray-700 mb-4 z-10">备用水箱</h3>
                        <div className="w-full flex-1 rounded-3xl bg-gray-200 border-4 border-white shadow-inner relative overflow-hidden mb-4">
                            <div className="absolute bottom-0 w-full bg-cyan-500 transition-all duration-700 ease-in-out" style={{height: `${backupLevel}%`}}>
                                <div className="absolute top-0 w-full h-4 bg-cyan-300 opacity-50 animate-pulse"></div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center text-white/90 font-bold text-3xl drop-shadow-md z-10 mix-blend-overlay">{backupLevel}%</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 w-full z-10">
                            <button onClick={() => handleFill('backup')} className="neu-btn py-2 text-cyan-600 text-xs font-bold hover:bg-cyan-50 flex flex-col items-center gap-1">
                                <Plus className="w-4 h-4" /> 补水
                            </button>
                            <button onClick={() => handleDrain('backup')} className="neu-btn py-2 text-gray-500 text-xs font-bold hover:text-red-500 flex flex-col items-center gap-1">
                                <RotateCcw className="w-4 h-4" /> 排空
                            </button>
                        </div>
                     </div>
                </div>

                {/* Right: Controls & Schedule */}
                <div className="col-span-7 flex flex-col gap-6">
                    {/* Top: Current Status */}
                    <div className="neu-flat p-6 flex items-center justify-between">
                        <div className="flex gap-8">
                            <div className="flex items-center gap-4">
                                <div className="p-4 bg-blue-100 text-blue-600 rounded-2xl"><Waves className="w-8 h-8"/></div>
                                <div>
                                    <div className="text-sm text-gray-400">当前流速</div>
                                    <div className="text-2xl font-bold text-gray-700">1.2 <span className="text-sm font-normal">L/min</span></div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-4 bg-green-100 text-green-600 rounded-2xl"><FlaskConical className="w-8 h-8"/></div>
                                <div>
                                    <div className="text-sm text-gray-400">当前肥力配比 (EC)</div>
                                    <div className="text-2xl font-bold text-gray-700">1.5 <span className="text-sm font-normal">mS/cm</span></div>
                                </div>
                            </div>
                        </div>
                        <button onClick={handleIrrigate} className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold shadow-lg shadow-blue-200 transform hover:scale-105 active:scale-95 transition-all">
                            立即启动滴灌
                        </button>
                    </div>

                    {/* Bottom: Schedule */}
                    <div className="neu-flat p-6 flex-1 flex flex-col">
                        <h3 className="text-lg font-bold text-gray-700 mb-4 flex items-center gap-2"><Calendar className="w-5 h-5 text-gray-500"/> 未来 24 小时计划</h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-4 neu-pressed rounded-xl border-l-4 border-blue-400">
                                <div className="flex items-center gap-4">
                                    <div className="text-xl font-mono font-bold text-gray-700">14:00</div>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-gray-700">分区 A 精准补水</span>
                                        <span className="text-xs text-gray-400">预计时长: 15分钟 | 水量: 20L</span>
                                    </div>
                                </div>
                                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-bold">待执行</span>
                            </div>
                            <div className="flex items-center justify-between p-4 neu-pressed rounded-xl border-l-4 border-green-400">
                                <div className="flex items-center gap-4">
                                    <div className="text-xl font-mono font-bold text-gray-700">18:30</div>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-gray-700">全园微量元素补充</span>
                                        <span className="text-xs text-gray-400">配方: NPK-20 | 预计时长: 10分钟</span>
                                    </div>
                                </div>
                                <span className="px-3 py-1 bg-gray-200 text-gray-500 rounded-full text-xs font-bold">计划中</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const MosquitoControlView = ({ onBack }: { onBack: () => void }) => {
    // Generate some random data for the chart, ensuring it looks busy
    const [chartData] = useState(() => Array.from({ length: 24 }, () => Math.floor(Math.random() * 60) + 20));

    return (
        <div className="w-full h-full flex flex-col animate-fadeIn">
            <div className="mb-6 flex items-center gap-6">
                <button onClick={onBack} className="neu-btn w-12 h-12 flex items-center justify-center rounded-full text-gray-500 hover:text-green-600">
                    <ArrowLeft className="w-6 h-6" />
                </button>
                <h2 className="text-3xl font-light text-gray-800">蚊虫生态捕捉系统 <span className="text-sm bg-purple-100 text-purple-600 px-3 py-1 rounded-full font-bold ml-2">S20F 云台在线</span></h2>
            </div>

            <div className="grid grid-cols-12 gap-6 h-full min-h-0">
                {/* Left: Radar Visual - LIGHT MODE UPDATE */}
                <div className="col-span-5 flex flex-col">
                    <div className="neu-pressed p-8 flex flex-col items-center justify-center h-full aspect-square relative overflow-hidden bg-[#eaeaeb] rounded-[32px] border border-gray-200 shadow-inner">
                        {/* 2D Map Background (Light) */}
                        <div className="absolute inset-0 opacity-20" style={{
                            backgroundImage: `url('https://images.unsplash.com/photo-1524312662266-9e6584c3cb3e?q=80&w=600&auto=format&fit=crop')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'grayscale(1)'
                        }}></div>
                        
                        {/* Radar Circles (Darker for Light Mode) */}
                        <div className="w-[80%] h-[80%] border border-gray-400/30 rounded-full absolute animate-pulse"></div>
                        <div className="w-[50%] h-[50%] border border-gray-400/50 rounded-full absolute"></div>
                        <div className="w-[20%] h-[20%] border border-purple-400 rounded-full absolute bg-purple-500/10"></div>
                        
                        {/* Scanner Line */}
                        <div className="absolute inset-0 w-full h-full animate-[spin_4s_linear_infinite]">
                            <div className="w-[50%] h-[2px] bg-gradient-to-r from-transparent to-purple-500 absolute top-1/2 left-1/2 origin-left"></div>
                        </div>
                        
                        {/* Targets */}
                        <div className="absolute top-[30%] left-[60%] w-3 h-3 bg-red-500 rounded-full shadow-lg border border-white animate-ping"></div>
                        <div className="absolute bottom-[40%] left-[30%] w-2 h-2 bg-red-500 rounded-full shadow-lg border border-white"></div>

                        <div className="absolute bottom-6 left-6 text-xs font-mono text-gray-500 z-10">
                            <div>AZIMUTH: 124.5°</div>
                            <div>ELEVATION: 45.2°</div>
                            <div>TARGETS: 2</div>
                        </div>
                    </div>
                </div>

                {/* Right: Data */}
                <div className="col-span-7 flex flex-col gap-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="neu-flat p-6 flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                <Bug className="w-8 h-8" />
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-gray-700">1,248</div>
                                <div className="text-sm text-gray-400 uppercase tracking-wider">本月累计捕获</div>
                            </div>
                        </div>
                        <div className="neu-flat p-6 flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                <Leaf className="w-8 h-8" />
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-gray-700">98%</div>
                                <div className="text-sm text-gray-400 uppercase tracking-wider">益虫识别保护率</div>
                            </div>
                        </div>
                    </div>

                    <div className="neu-flat p-6 flex-1 flex flex-col">
                        <h3 className="text-lg font-bold text-gray-700 mb-6">24小时捕虫效率曲线</h3>
                        <div className="w-full flex-1 flex items-end justify-between gap-1 px-2 relative">
                             {/* SVG Chart for smoother look */}
                             <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#A855F7" stopOpacity="0.4"/>
                                        <stop offset="100%" stopColor="#A855F7" stopOpacity="0"/>
                                    </linearGradient>
                                </defs>
                                <path 
                                    d={`M0,${150 - chartData[0]} ${chartData.map((d, i) => `L${(i / (chartData.length - 1)) * 100}%,${100 - d}`).join(' ')} L100%,150 L0,150 Z`} 
                                    fill="url(#chartGradient)" 
                                    className="text-purple-500"
                                />
                                <polyline 
                                    points={chartData.map((d, i) => `${(i / (chartData.length - 1)) * 100}%,${100 - d}`).join(' ')}
                                    fill="none" 
                                    stroke="#A855F7" 
                                    strokeWidth="3" 
                                    vectorEffect="non-scaling-stroke"
                                />
                             </svg>
                             {/* X Axis Labels */}
                             <div className="absolute -bottom-6 w-full flex justify-between text-[10px] text-gray-400 font-mono">
                                <span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>23:00</span>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- New Component: Data Monitoring Panel to fill whitespace ---
const DataMonitoringPanel = () => {
    return (
        <div className="neu-flat flex-1 flex flex-col p-6 min-h-0">
             <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-green-100 text-green-700">
                        <Database className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-base font-bold text-gray-700">智能养护数据监控中心</h3>
                        <p className="text-xs text-gray-400">Real-time Maintenance & Data Monitoring</p>
                    </div>
                </div>
                <div className="flex gap-2">
                   <span className="text-[10px] px-2 py-1 bg-gray-200 rounded text-gray-500 font-mono">SYS_OK</span>
                   <span className="text-[10px] px-2 py-1 bg-green-100 rounded text-green-600 font-mono animate-pulse">LIVE</span>
                </div>
             </div>

             <div className="flex gap-6 h-full">
                {/* Left Side: Quick Stats Grid */}
                <div className="flex-1 grid grid-cols-2 gap-3 h-full">
                    <QuickStat icon={<Video />} label="视频识别" value="运行中" status="running" />
                    <QuickStat icon={<BarChart3 />} label="本周简报" value="生成完毕" />
                    <QuickStat icon={<History />} label="历史事件" value="24 条" />
                    <QuickStat icon={<Sprout />} label="植被生长" value="监测中" status="running" />
                </div>

                {/* Right Side: System Log Terminal */}
                <div className="flex-[1.5] neu-pressed p-4 rounded-xl flex flex-col font-mono text-xs overflow-hidden relative bg-[#f8f8f6]">
                     <div className="flex items-center gap-2 mb-2 text-gray-400 border-b border-gray-200 pb-2">
                         <Terminal className="w-3 h-3" />
                         <span className="uppercase tracking-widest font-bold">系统运行日志 (System Log)</span>
                     </div>
                     <div className="flex-1 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                         <div className="flex gap-2">
                            <span className="text-gray-400">[14:02:05]</span>
                            <span className="text-blue-500">INFO</span>
                            <span className="text-gray-600">检测到环境湿度下降，滴灌系统预备启动...</span>
                         </div>
                         <div className="flex gap-2">
                            <span className="text-gray-400">[14:01:42]</span>
                            <span className="text-green-600">SUCCESS</span>
                            <span className="text-gray-600">主庭院画面分析完成，无异常。</span>
                         </div>
                         <div className="flex gap-2">
                            <span className="text-gray-400">[14:00:15]</span>
                            <span className="text-blue-500">INFO</span>
                            <span className="text-gray-600">云端数据库同步成功 (Sync_ID: #8821)。</span>
                         </div>
                         <div className="flex gap-2">
                            <span className="text-gray-400">[13:58:33]</span>
                            <span className="text-orange-500">WARN</span>
                            <span className="text-gray-600">罗汉松区域土壤 EC 值轻微波动。</span>
                         </div>
                         <div className="flex gap-2">
                            <span className="text-gray-400">[13:55:10]</span>
                            <span className="text-green-600">SUCCESS</span>
                            <span className="text-gray-600">系统自检完成，所有传感器在线。</span>
                         </div>
                     </div>
                </div>
             </div>
        </div>
    )
}

// --- Sub-Components ---

const QuickStat = ({ icon, label, value, status }: any) => (
    <div className="bg-white/50 rounded-xl flex items-center justify-between px-4 py-3 hover:bg-white transition-colors cursor-pointer border border-transparent hover:border-green-100">
        <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${status === 'running' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                {React.cloneElement(icon, { size: 18 })}
            </div>
            <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{label}</span>
                <span className="text-sm font-bold text-gray-700">{value}</span>
            </div>
        </div>
        {status === 'running' && <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>}
    </div>
);

const FunctionCard = ({ title, icon, children, actionLabel, subtext, onClick }: any) => (
  <div className="neu-flat p-5 flex flex-col h-full relative overflow-hidden group hover:shadow-lg hover:shadow-green-100/50 transition-shadow cursor-pointer" onClick={onClick}>
    <div className="flex justify-between items-center mb-3 shrink-0">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-xl bg-white shadow-sm">{icon}</div>
        <h3 className="text-base font-bold text-gray-700">{title}</h3>
      </div>
      {actionLabel && (
         <button onClick={(e) => { e.stopPropagation(); onClick && onClick(); }} className="px-4 py-1.5 rounded-full bg-[#66BB6A] text-white text-xs font-bold shadow-md hover:bg-green-600 transition-colors">
            {actionLabel}
         </button>
      )}
    </div>
    <div className="flex-1 flex flex-col min-h-0">
      {children}
    </div>
    {subtext && <div className="mt-2 text-[10px] text-right text-gray-400 font-medium">{subtext}</div>}
  </div>
);

const EnvironmentPanel = () => {
   return (
      <div className="h-full flex flex-col gap-5">
         {/* Soil Health - Expanded with Temp, Humidity, pH, EC, N, P, K */}
         <div className="neu-flat p-6 relative overflow-hidden flex-1 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-gray-500 text-sm font-bold tracking-widest uppercase flex items-center gap-2">
                    <Leaf className="w-4 h-4" /> 土壤健康指数
                </h3>
                <span className="text-[10px] bg-green-100 text-green-700 px-2 py-1 rounded-full font-bold">优</span>
            </div>
            
            <div className="flex flex-col gap-3 my-auto overflow-y-auto pr-2 custom-scrollbar">
               {/* Grid 1: Soil Temp & Moisture */}
               <div className="grid grid-cols-2 gap-3">
                  <div className="neu-pressed p-3 rounded-xl flex flex-col items-center justify-center">
                     <span className="text-2xl font-light text-gray-700">18°C</span>
                     <div className="flex items-center gap-1 mt-1 text-orange-400">
                        <Thermometer className="w-3 h-3" />
                        <span className="text-[10px] font-bold uppercase">土温</span>
                     </div>
                  </div>
                  <div className="neu-pressed p-3 rounded-xl flex flex-col items-center justify-center">
                     <span className="text-2xl font-light text-gray-700">45%</span>
                     <div className="flex items-center gap-1 mt-1 text-blue-400">
                        <Droplets className="w-3 h-3" />
                        <span className="text-[10px] font-bold uppercase">湿度</span>
                     </div>
                  </div>
               </div>

               {/* Grid 2: pH & EC */}
               <div className="flex items-center justify-between mt-1">
                  <div className="flex items-center gap-2">
                     <div className="w-8 h-8 rounded-lg neu-pressed flex items-center justify-center text-[#4FC3F7] shadow-inner font-bold text-[10px]">pH</div>
                     <div className="flex flex-col">
                        <span className="text-lg font-bold text-gray-700">6.8</span>
                     </div>
                  </div>
                  <div className="h-1.5 w-12 bg-green-200 rounded-full overflow-hidden">
                      <div className="h-full w-[70%] bg-green-500 rounded-full"></div>
                  </div>
               </div>
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                     <div className="w-8 h-8 rounded-lg neu-pressed flex items-center justify-center text-[#4FC3F7] shadow-inner font-bold text-[10px]">EC</div>
                     <div className="flex flex-col">
                        <span className="text-lg font-bold text-gray-700">1.2</span>
                     </div>
                  </div>
                  <div className="h-1.5 w-12 bg-blue-200 rounded-full overflow-hidden">
                      <div className="h-full w-[45%] bg-[#4FC3F7] rounded-full"></div>
                  </div>
               </div>
               
               {/* Grid 3: N, P, K */}
               <div className="grid grid-cols-3 gap-2 mt-1 pt-3 border-t border-gray-200">
                    <div className="flex flex-col items-center">
                        <div className="text-base font-bold text-gray-700">120</div>
                        <div className="text-[10px] text-gray-400">氮 (N)</div>
                        <div className="w-full bg-gray-200 h-1 rounded-full mt-1"><div className="w-[80%] h-full bg-purple-400 rounded-full"></div></div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-base font-bold text-gray-700">45</div>
                        <div className="text-[10px] text-gray-400">磷 (P)</div>
                        <div className="w-full bg-gray-200 h-1 rounded-full mt-1"><div className="w-[60%] h-full bg-orange-400 rounded-full"></div></div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-base font-bold text-gray-700">180</div>
                        <div className="text-[10px] text-gray-400">钾 (K)</div>
                        <div className="w-full bg-gray-200 h-1 rounded-full mt-1"><div className="w-[90%] h-full bg-yellow-400 rounded-full"></div></div>
                    </div>
               </div>
            </div>
            
            <div className="text-[10px] text-gray-400 mt-2 text-center border-t border-gray-200 pt-2">
                更新: 刚刚
            </div>
         </div>

         {/* Environment Atmosphere - Expanded Fonts */}
         <div className="neu-flat p-6 flex-1 flex flex-col">
            <h3 className="text-gray-500 text-sm font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
                <Wind className="w-4 h-4" /> 环境指标
            </h3>
            <div className="grid grid-cols-2 gap-4 flex-1">
               <div className="neu-pressed p-3 rounded-2xl flex flex-col items-center justify-center">
                  <div className="flex items-start gap-1">
                      {/* Increased Font Size */}
                      <span className="text-5xl font-extralight text-gray-700">26</span>
                      <span className="text-lg text-gray-400 mt-2">°C</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-orange-400">
                     <Thermometer className="w-4 h-4" />
                     <span className="text-xs font-bold uppercase">气温</span>
                  </div>
               </div>
               <div className="neu-pressed p-3 rounded-2xl flex flex-col items-center justify-center">
                  <div className="flex items-start gap-1">
                      {/* Increased Font Size */}
                      <span className="text-5xl font-extralight text-gray-700">65</span>
                      <span className="text-lg text-gray-400 mt-2">%</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-blue-400">
                     <Droplets className="w-4 h-4" />
                     <span className="text-xs font-bold uppercase">湿度</span>
                  </div>
               </div>
               <div className="neu-pressed p-3 rounded-2xl flex flex-col items-center justify-center col-span-2">
                  <div className="flex items-end gap-2">
                     {/* Increased Font Size */}
                     <span className="text-5xl font-extralight text-gray-700">45k</span>
                     <span className="text-sm text-gray-400 mb-2 font-bold">LUX</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-yellow-500">
                     <Sun className="w-4 h-4" />
                     <span className="text-xs font-bold uppercase">光照强度</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

const AIVisionFeed = () => {
   const [currentTime, setCurrentTime] = useState(new Date());
   const [imgError, setImgError] = useState(false);

   useEffect(() => {
     const timer = setInterval(() => setCurrentTime(new Date()), 1000);
     return () => clearInterval(timer);
   }, []);

   // NOTE: Using a much lusher Chinese garden image with prominent trees and bushes
   const chineseGardenImage = "https://images.unsplash.com/photo-1598902169824-7435f9923831?q=80&w=1600&auto=format&fit=crop";
   // Fallback just in case
   const fallbackImage = "https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=1600&auto=format&fit=crop";

   return (
      <div className="neu-flat p-2 relative overflow-hidden group rounded-[32px] flex flex-col shadow-inner bg-[#eaeaeb]">
         {/* Live Camera Simulation with 4:3 Aspect Ratio */}
         <div className="w-full aspect-[4/3] bg-black rounded-[24px] overflow-hidden relative shadow-2xl flex items-center justify-center group mx-auto">
            
            {/* Image Layer */}
            <img 
               src={imgError ? fallbackImage : chineseGardenImage}
               onError={() => setImgError(true)}
               className="w-full h-full object-cover absolute inset-0 z-0 scale-[1.02]"
               alt="中式庭院监控"
            />
            
            {/* Overlays Container */}
            <div className="absolute inset-0 z-10 pointer-events-none">
               {/* 1. Vignette & Gradients */}
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.5)_100%)]"></div>
               <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent"></div>
               <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent"></div>

               {/* 2. Scanlines effect */}
               <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_3px] pointer-events-none opacity-20"></div>

               {/* TOP BAR */}
               <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start">
                  <div className="flex flex-col gap-2">
                     <div className="flex items-center gap-3 bg-red-600/90 backdrop-blur px-3 py-1 rounded-md">
                        <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></div>
                        <span className="text-white font-mono font-bold tracking-widest text-sm">实时监控</span>
                     </div>
                     <div className="flex items-center gap-2 text-white/70 font-mono text-xs mt-1">
                        <Camera className="w-4 h-4" />
                        <span className="tracking-wider">摄像头-01 [主庭院]</span>
                     </div>
                  </div>

                  <div className="flex flex-col items-end text-right">
                     <div className="text-5xl font-extralight font-mono text-white tracking-widest drop-shadow-xl tabular-nums">
                        {currentTime.toLocaleTimeString('en-GB', { hour12: false })}
                     </div>
                     <div className="flex items-center gap-3 text-white/90 mt-2">
                        <span className="text-sm font-medium font-mono uppercase tracking-widest">
                            {currentTime.toLocaleDateString('zh-CN', { weekday: 'long' })}
                        </span>
                        <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                        <span className="text-sm font-medium font-mono tracking-widest">
                            {currentTime.toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.')}
                        </span>
                     </div>
                  </div>
               </div>

               {/* WEATHER WIDGET (Floating) - Localized */}
               <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-2 flex items-center gap-8 text-white shadow-lg">
                   <div className="flex flex-col items-center">
                       <Sun className="w-5 h-5 text-yellow-400 mb-1" />
                       <span className="text-xs font-mono text-white/80">晴</span>
                   </div>
                   <div className="h-6 w-px bg-white/20"></div>
                   <div className="text-center">
                       <div className="text-xl font-bold font-mono">26°C</div>
                       <div className="text-[10px] text-white/60 uppercase">气温</div>
                   </div>
                   <div className="h-6 w-px bg-white/20"></div>
                   <div className="text-center">
                       <div className="text-xl font-bold font-mono">65%</div>
                       <div className="text-[10px] text-white/60 uppercase">湿度</div>
                   </div>
               </div>

               {/* YOLO BOUNDING BOXES REMOVED as per user request for pure monitoring view */}

               {/* BOTTOM BAR INFO - Localized */}
               <div className="absolute bottom-6 left-8 right-8 flex justify-between items-end">
                   <div className="glass-panel px-6 py-4 flex items-center gap-4 border-l-4 border-l-green-500 max-w-lg bg-black/60 border-white/10 text-white backdrop-blur-xl">
                       <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/50">
                           <Activity className="w-5 h-5 text-green-400" />
                       </div>
                       <div>
                           <div className="text-sm font-bold text-green-400 mb-0.5">系统状态：正常</div>
                           <div className="text-xs text-white/80 leading-snug">画面清晰，延迟低。所有传感器数据已实时同步。</div>
                       </div>
                   </div>

                   <div className="flex gap-6 text-[10px] font-mono text-white/50 bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm border border-white/5">
                        <span className="flex items-center gap-2"><Maximize2 className="w-3 h-3 text-white/70" /> 2048x1536</span>
                        <span className="w-px h-3 bg-white/20"></span>
                        <span className="flex items-center gap-2"><Activity className="w-3 h-3 text-white/70" /> 30 FPS</span>
                        <span className="w-px h-3 bg-white/20"></span>
                        <span className="flex items-center gap-2"><Wifi className="w-3 h-3 text-white/70" /> 12 Mbps</span>
                   </div>
               </div>
            </div>
         </div>
      </div>
   );
}

// --- Landscape Optimization View ---
const LandscapeOptimization = ({ onBack }: { onBack: () => void }) => {
  const [step, setStep] = useState<'upload' | 'optimizing' | 'result'>('upload');
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  // --- CONFIGURATION FOR IMAGE PATHS ---
  const OriginalImagePath = uploadedImage; 
  // Fallback web image if local file access is blocked by browser
  const OptimizedResultPath = "C:\\Users\\evlei\\Desktop\\AiGarden-main\\AiGarden-main\\result\\t.jpg";
  const DemoFallbackPath = "https://images.unsplash.com/photo-1558905540-212907656624?q=80&w=2560&auto=format&fit=crop";

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
        startOptimization();
      };
      reader.readAsDataURL(file);
    }
  };

  const startOptimization = () => {
    setStep('optimizing');
    setProgress(0);
  };

  useEffect(() => {
    if (step === 'optimizing') {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer);
            setStep('result');
            return 100;
          }
          return prev + 1.5;
        });
      }, 50);
      return () => clearInterval(timer);
    }
  }, [step]);

  // Image Error Handler to fallback if local path fails
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      e.currentTarget.src = DemoFallbackPath;
  };

  return (
    <div className="w-full h-full flex flex-col animate-fadeIn px-8">
      <div className="mb-6 flex items-center gap-6">
        <button onClick={onBack} className="neu-btn w-12 h-12 flex items-center justify-center rounded-full text-gray-500 hover:text-green-600">
           <ArrowRight className="w-6 h-6 rotate-180" />
        </button>
        <h2 className="text-3xl font-light text-gray-800">庭院景观优化设计 <span className="text-sm text-green-600 font-bold ml-2">BETA</span></h2>
      </div>

      <div className="flex-1 w-full flex flex-col items-center justify-center relative bg-white/30 rounded-[32px] border border-white/50 shadow-sm p-8">
        
        {step === 'upload' && (
          <div className="w-full max-w-5xl aspect-[16/9] neu-flat flex flex-col items-center justify-center border-2 border-dashed border-gray-300 hover:border-green-400 transition-all cursor-pointer group rounded-[32px]" onClick={() => fileInputRef.current?.click()}>
            <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileSelect}/>
            <div className="w-28 h-28 rounded-full bg-green-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner">
              <Upload className="w-12 h-12 text-green-500" />
            </div>
            <h3 className="text-3xl font-light text-gray-700 mb-3">选择本地庭院照片</h3>
            <p className="text-gray-400 font-light text-lg">支持 JPG, PNG 高清图片上传 (推荐 2560px 宽)</p>
          </div>
        )}

        {step === 'optimizing' && (
           <div className="w-full max-w-3xl flex flex-col items-center">
              <div className="w-32 h-32 mb-8 relative">
                 <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
                 <div className="absolute inset-0 border-4 border-green-500 rounded-full border-t-transparent animate-spin"></div>
                 <Leaf className="absolute inset-0 m-auto text-green-500 w-10 h-10 animate-pulse" />
              </div>
              <h3 className="text-4xl font-light text-gray-700 mb-8">正在进行 AI 景观生成...</h3>
              <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden neu-pressed">
                 <div className="h-full bg-gradient-to-r from-green-400 to-[#4FC3F7] transition-all duration-75 ease-linear rounded-full relative" style={{ width: `${progress}%` }}>
                    <div className="absolute right-0 top-0 bottom-0 w-full bg-gradient-to-l from-white/30 to-transparent"></div>
                 </div>
              </div>
              <div className="mt-6 flex justify-between w-full text-gray-400 text-sm font-mono">
                 <span>正在分析地形 (ANALYZING)...</span>
                 <span className="text-green-600 font-bold">{Math.round(progress)}%</span>
              </div>
           </div>
        )}

        {step === 'result' && (
          <div className="w-full h-full grid grid-cols-2 gap-8">
            {/* LEFT SIDE: Original Image */}
            <div className="flex flex-col gap-4">
               <div className="neu-flat p-2 h-full rounded-[24px]">
                  <img src={OriginalImagePath || ''} className="w-full h-full object-cover rounded-[20px]" alt="Original Upload" />
               </div>
               <div className="text-center text-gray-400 font-bold uppercase tracking-widest text-sm">原始图片 (Original)</div>
            </div>

            {/* RIGHT SIDE: Optimized Result */}
            <div className="flex flex-col gap-4">
               <div className="neu-flat p-2 h-full rounded-[24px] relative group overflow-hidden">
                  <img 
                      src={OptimizedResultPath} 
                      onError={handleImageError} // Handles local path failure in browser
                      className="w-full h-full object-cover rounded-[20px]" 
                      alt="Optimized Result" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[20px] flex items-end p-8">
                     <div className="text-white">
                        <h4 className="text-2xl font-light mb-2">新中式·禅意庭院 v2.0</h4>
                        <p className="text-white/80 text-sm">特点：低维护成本，耐旱植物配置，高审美价值。</p>
                     </div>
                  </div>
               </div>
               <div className="text-center text-green-600 font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> 优化结果 (Optimized Result)
               </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);