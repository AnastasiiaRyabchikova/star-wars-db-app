const compose = (...funcs) => (component) => (
    funcs.reduceRight((prev, func) => func(prev), component)
);

export default compose;
