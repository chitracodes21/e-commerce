import { categories } from "../../data/categoriesData";
import CategoryCard from "./CategoryCard";

function Categories() {
  return (
    <>
      <div className="section-title">
        <h2>Categories</h2>
      </div>
      <div className="categories">
        {categories.map((cat, i) => {
          const Icon = cat.icon;
          return <CategoryCard key={i} icon={<Icon />} label={cat.name} />;
        })}
      </div>
    </>
  );
}

export default Categories;
