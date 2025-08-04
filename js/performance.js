// Performance optimization utilities
const PerformanceOptimizer = {
    // Lazy load scripts when they're needed
    lazyLoadScript: (src, callback) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.defer = true;
        
        if (callback) {
            script.onload = callback;
        }
        
        document.head.appendChild(script);
    },

    // Intersection Observer for lazy loading
    createIntersectionObserver: (callback, options = {}) => {
        if ('IntersectionObserver' in window) {
            return new IntersectionObserver(callback, {
                rootMargin: '50px',
                threshold: 0.1,
                ...options
            });
        }
        return null;
    },

    // Debounce function for performance
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttle function for performance
    throttle: (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
};

// Initialize performance optimizations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Optimize scroll events
    const optimizedScrollHandler = PerformanceOptimizer.throttle(() => {
        // Handle scroll events efficiently
    }, 16); // ~60fps

    window.addEventListener('scroll', optimizedScrollHandler, { passive: true });

    // Optimize resize events
    const optimizedResizeHandler = PerformanceOptimizer.debounce(() => {
        // Handle resize events efficiently
    }, 100);

    window.addEventListener('resize', optimizedResizeHandler);
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PerformanceOptimizer;
} 