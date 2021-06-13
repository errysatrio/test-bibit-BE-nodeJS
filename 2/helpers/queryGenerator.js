module.exports = function querygenerator(query, isSearch) {
    const assignedQuery = {};

    if (isSearch && query.movie_title && query.movie_title !== '') assignedQuery.s = query.movie_title;
    if (!isSearch && query.movie_title && query.movie_title !== '') assignedQuery.t = query.movie_title;
    if (query.imdb_id && query.imdb_id !== '') assignedQuery.i = query.imdb_id;
    if (query.movie_type && query.movie_type !== '') assignedQuery.type = query.movie_type;
    if (query.year && query.year !== '') assignedQuery.y = query.year;
    if (query.plot && query.plot !== '') assignedQuery.plot = query.plot;
    if (query.data_type && query.data_type !== '') assignedQuery.r = query.data_type;
    if (query.page && query.page !== '') assignedQuery.page = query.page;

    return assignedQuery
}