
export interface ChapterProgress {
  bestScore: number;
  lastScore: number;
  completedCount: number;
  lastDate: string;
}

export interface ProgressData {
  [mode: string]: {
    [chapterId: string]: ChapterProgress;
  };
}

const STORAGE_KEY = 'loma280_progress';

export const saveProgress = (mode: string, chapterId: number, score: number) => {
  const data = getProgress();
  const modeData = data[mode] || {};
  const prevProgress = modeData[chapterId] || { bestScore: 0, lastScore: 0, completedCount: 0, lastDate: '' };

  const newProgress: ChapterProgress = {
    bestScore: Math.max(prevProgress.bestScore, score),
    lastScore: score,
    completedCount: prevProgress.completedCount + 1,
    lastDate: new Date().toISOString(),
  };

  data[mode] = {
    ...modeData,
    [chapterId]: newProgress
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  return data;
};

export const getProgress = (): ProgressData => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return {};
  try {
    return JSON.parse(saved);
  } catch {
    return {};
  }
};
