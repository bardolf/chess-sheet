export const onAfterGridChange = (data) => ({
    type: 'GRID_CHANGE',
    data,
});

export const onAfterGridSelection = (row, col) => ({
    type: 'GRID_SELECTION', row, col
});

export const onReset = () => ({
    type: 'RESET'
});

export const onExample = () => ({
    type: 'EXAMPLE'
});