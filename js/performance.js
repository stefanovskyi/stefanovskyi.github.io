// Performance optimization utilities
const PerformanceOptimizer = {
    // Lazy load scripts when they're needed
    lazyLoadScript: (src, callback, options = {}) => {
        // Check if script already exists
        if (document.querySelector(`script[src="${src}"]`)) {
            if (callback) callback();
            return;
        }
        
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.defer = true;
        
        if (options.type) script.type = options.type;
        if (options.crossorigin) script.crossOrigin = options.crossorigin;
        
        if (callback) {
            script.onload = callback;
            script.onerror = () => console.warn(`Failed to load script: ${src}`);
        }
        
        document.head.appendChild(script);
    },

    // Lazy load CSS when needed
    lazyLoadCSS: (href, callback) => {
        // Check if stylesheet already exists
        if (document.querySelector(`link[href="${href}"]`)) {
            if (callback) callback();
            return;
        }
        
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        
        if (callback) {
            link.onload = callback;
            link.onerror = () => console.warn(`Failed to load stylesheet: ${href}`);
        }
        
        document.head.appendChild(link);
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
    },

    // Load resource on user interaction
    loadOnInteraction: (loadFn, events = ['mousedown', 'touchstart']) => {
        let loaded = false;
        const load = () => {
            if (loaded) return;
            loaded = true;
            loadFn();
            events.forEach(event => document.removeEventListener(event, load, true));
        };
        
        events.forEach(event => document.addEventListener(event, load, true));
        return load;
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