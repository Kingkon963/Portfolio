const keyGenerator = (name = 'key') => {
    return `${name}-${Math.random()}.${(new Date).getTime}`;
};

export default keyGenerator;