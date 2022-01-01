import qs from "qs";

// qs options
const options = { encodeValuesOnly: true };

const populate = { populate: "*" };

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

export { get_grid_posts };
