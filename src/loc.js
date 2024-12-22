const en = {
  imageQualityDescription: `
    مرحبا جدتي اذا تبي الصوره حق العنصر عاليه اختار قويه واذا ماتبي تصرف نت خليها ناقصه
  `,

  themeToggleDescription: `اذا تبي تخلي الصفحه ضوء لصي وضع الغداء`,
};

// The object you want to save
const itemID = {
  config: {
    theme: "dark",
    language: "ar",
    perPageLimitItem: 200,
    pngsQuality: "200x200",
  },
  state: {
    displayMode: 2, // Default Mode: ALL
  },
};

let current_data;
let itemData;
let gl_ob47_added_itemData;
let gl_ob46_added_itemData;
let currentPage = 1;
let cdn_img_json;
let pngs_json_list;
