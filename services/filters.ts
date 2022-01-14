import qs from "qs";

// qs options
const options = { encodeValuesOnly: true };

// home grid filters
const get_grid_posts = (grid = false) =>
  qs.stringify(
    {
      filters: {
        grid_view: {
          $eq: grid,
        },
      },
      pagination: {
        page: 1,
        pageSize: grid ? 5 : 18,
      },
      sort: ["id:DESC"],
    },
    options
  );

const get_category_posts = (name = "") =>
  qs.stringify(
    {
      filters: {
        name,
      },
      pagination: {
        page: 1,
        pageSize: 1,
      },
      sort: ["id:DESC"],
    },
    options
  );

export { get_grid_posts, get_category_posts };
