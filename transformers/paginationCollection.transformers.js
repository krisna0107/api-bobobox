export const paginationTransform = (size, data) => {
    return {
        data: data.rows,
        totalPages: Math.ceil(data.count / size)
    }
}