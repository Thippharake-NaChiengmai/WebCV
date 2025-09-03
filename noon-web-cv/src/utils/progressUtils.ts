import NProgress from 'nprogress';

// Utility functions for manual progress control
export const progressUtils = {
  // Start progress manually
  start: () => {
    NProgress.start();
  },

  // Set specific progress percentage (0-1)
  set: (percentage: number) => {
    NProgress.set(Math.max(0, Math.min(1, percentage)));
  },

  // Increment progress
  inc: (amount?: number) => {
    NProgress.inc(amount);
  },

  // Complete progress
  done: () => {
    NProgress.done();
  },

  // Configure NProgress settings
  configure: (options: Partial<{
    minimum: number;
    template: string;
    easing: string;
    speed: number;
    trickle: boolean;
    trickleSpeed: number;
    showSpinner: boolean;
    barSelector: string;
    spinnerSelector: string;
    parent: string;
  }>) => {
    NProgress.configure(options);
  },

  // Wrapper for async operations with progress
  withProgress: async <T>(
    asyncOperation: () => Promise<T>,
    options?: {
      startDelay?: number;
      minDuration?: number;
    }
  ): Promise<T> => {
    const { startDelay = 0, minDuration = 300 } = options || {};
    
    // Start progress after optional delay
    const startTimer = setTimeout(() => {
      NProgress.start();
    }, startDelay);

    const startTime = Date.now();
    
    try {
      const result = await asyncOperation();
      
      // Ensure minimum duration for better UX
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, minDuration - elapsed);
      
      if (remainingTime > 0) {
        await new Promise(resolve => setTimeout(resolve, remainingTime));
      }
      
      clearTimeout(startTimer);
      NProgress.done();
      return result;
    } catch (error) {
      clearTimeout(startTimer);
      NProgress.done();
      throw error;
    }
  }
};

export default progressUtils;
