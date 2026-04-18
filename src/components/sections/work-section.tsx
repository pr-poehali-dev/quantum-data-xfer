import { useReveal } from "@/hooks/use-reveal"

const products = [
  {
    number: "01",
    title: "Карточная игра",
    category: "Настольные игры • как взрывная рыбка",
    year: "Бесплатно",
    direction: "left",
    image: "https://cdn.poehali.dev/projects/0fa9eb41-ff61-4b22-8123-dda6af8ec227/files/6ab8bbec-c3d6-4ef6-b27d-2e4d9ef41176.jpg",
  },
  {
    number: "02",
    title: "Закладки для Библии",
    category: "Аксессуары • красочные и стильные",
    year: "Бесплатно",
    direction: "right",
    image: "https://cdn.poehali.dev/projects/0fa9eb41-ff61-4b22-8123-dda6af8ec227/files/8a3ffecf-e1c4-4571-9f30-70bb1a661035.jpg",
  },
  {
    number: "03",
    title: "Игрушки для детей",
    category: "Детские товары • фигурки, игрушки",
    year: "Бесплатно",
    direction: "left",
    image: "https://cdn.poehali.dev/projects/0fa9eb41-ff61-4b22-8123-dda6af8ec227/files/28d2f01b-de75-4f3f-b319-9da83d9352a2.jpg",
  },
]

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Каталог
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Популярные товары</p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {products.map((product, i) => (
            <ProductCard key={i} product={product} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({
  product,
  index,
  isVisible,
}: {
  product: { number: string; title: string; category: string; year: string; direction: string; image: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      return product.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
    }
    return "translate-x-0 opacity-100"
  }

  return (
    <div
      className={`group flex items-center justify-between border-b border-foreground/10 py-5 transition-all duration-700 hover:border-foreground/20 md:py-7 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
        marginLeft: index % 2 === 0 ? "0" : "auto",
        maxWidth: index % 2 === 0 ? "85%" : "90%",
      }}
    >
      <div className="flex items-center gap-4 md:gap-8">
        <img
          src={product.image}
          alt={product.title}
          className="h-12 w-12 rounded-lg object-cover opacity-80 transition-opacity group-hover:opacity-100 md:h-16 md:w-16"
        />
        <div className="flex items-baseline gap-4 md:gap-6">
          <span className="font-mono text-sm text-foreground/30 transition-colors group-hover:text-foreground/50 md:text-base">
            {product.number}
          </span>
          <div>
            <h3 className="mb-1 font-sans text-xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-2 md:text-3xl lg:text-4xl">
              {product.title}
            </h3>
            <p className="font-mono text-xs text-foreground/50 md:text-sm">{product.category}</p>
          </div>
        </div>
      </div>
      <span className="font-mono text-xs font-medium text-foreground/60 md:text-sm">{product.year}</span>
    </div>
  )
}
