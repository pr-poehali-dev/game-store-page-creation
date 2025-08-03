import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const vipPackages = [
    {
      id: 1,
      title: "RUST VIP Bronze",
      price: "299₽",
      duration: "30 дней",
      features: [
        "Приоритетный вход на сервер",
        "Уникальный титул [VIP]",
        "Доступ к VIP чату",
        "Ежедневный бонус ресурсов",
        "Скидка 10% в магазине"
      ],
      popular: false,
      color: "from-amber-600 to-amber-800"
    },
    {
      id: 2,
      title: "RUST VIP Silver",
      price: "599₽",
      duration: "30 дней",
      features: [
        "Все преимущества Bronze",
        "Титул [VIP+] с эффектами",
        "Доступ к VIP зонам",
        "Увеличенный лимит построек",
        "Скидка 20% в магазине",
        "Еженедельные кейсы"
      ],
      popular: true,
      color: "from-slate-400 to-slate-600"
    },
    {
      id: 3,
      title: "RUST VIP Gold",
      price: "999₽",
      duration: "30 дней",
      features: [
        "Все преимущества Silver",
        "Эксклюзивный титул [GOLD]",
        "Телепортация к друзьям",
        "Персональный сундук",
        "Скидка 30% в магазине",
        "Ежедневные кейсы",
        "Приоритетная поддержка"
      ],
      popular: false,
      color: "from-yellow-500 to-yellow-700"
    }
  ];

  const gameItems = [
    {
      id: 1,
      name: "Стартовый набор",
      description: "Базовые ресурсы для быстрого старта",
      price: "99₽",
      icon: "Package"
    },
    {
      id: 2,
      name: "Набор строителя",
      description: "Строительные материалы и инструменты",
      price: "199₽",
      icon: "Hammer"
    },
    {
      id: 3,
      name: "Военный набор",
      description: "Оружие и броня для выживания",
      price: "299₽",
      icon: "Shield"
    },
    {
      id: 4,
      name: "Редкие ресурсы",
      description: "Уникальные материалы для крафта",
      price: "399₽",
      icon: "Gem"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Gamepad2" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                RUST STORE
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#vip" className="text-foreground hover:text-primary transition-colors">VIP</a>
              <a href="#items" className="text-foreground hover:text-primary transition-colors">Предметы</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-orange-400 to-red-500 bg-clip-text text-transparent">
              RUST МАГАЗИН
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Получи преимущества на сервере с VIP статусами и уникальными предметами
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                <Icon name="Crown" size={20} className="mr-2" />
                Купить VIP
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Package" size={20} className="mr-2" />
                Предметы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Packages */}
      <section id="vip" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">VIP Статусы</h3>
            <p className="text-muted-foreground text-lg">Выбери свой уровень привилегий</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {vipPackages.map((pkg) => (
              <Card key={pkg.id} className={`relative transition-all duration-300 hover:scale-105 ${pkg.popular ? 'ring-2 ring-primary shadow-2xl shadow-primary/25' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Популярный
                  </Badge>
                )}
                <CardHeader>
                  <div className={`w-full h-2 rounded-full bg-gradient-to-r ${pkg.color} mb-4`}></div>
                  <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-primary">
                    {pkg.price}
                    <span className="text-sm text-muted-foreground">/{pkg.duration}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Crown" size={16} className="mr-2" />
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Game Items */}
      <section id="items" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Игровые предметы</h3>
            <p className="text-muted-foreground text-lg">Получи преимущество с нашими наборами</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gameItems.map((item) => (
              <Card key={item.id} className="group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4 group-hover:bg-primary/30 transition-colors">
                      <Icon name={item.icon as any} size={32} className="text-primary" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">{item.name}</h4>
                    <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                    <div className="text-2xl font-bold text-primary mb-4">{item.price}</div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас?</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                <Icon name="Zap" size={32} className="text-primary" />
              </div>
              <h4 className="font-bold text-xl mb-2">Мгновенная выдача</h4>
              <p className="text-muted-foreground">Все покупки выдаются автоматически в течение минуты</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                <Icon name="Shield" size={32} className="text-primary" />
              </div>
              <h4 className="font-bold text-xl mb-2">Безопасные платежи</h4>
              <p className="text-muted-foreground">Защищенные транзакции через проверенные платежные системы</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                <Icon name="Headphones" size={32} className="text-primary" />
              </div>
              <h4 className="font-bold text-xl mb-2">Поддержка 24/7</h4>
              <p className="text-muted-foreground">Наша команда поможет решить любые вопросы круглосуточно</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-border bg-card/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Gamepad2" size={24} className="text-primary" />
                <span className="font-bold text-xl">RUST STORE</span>
              </div>
              <p className="text-muted-foreground">Лучший магазин для сервера Rust с честными ценами и быстрой выдачей.</p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Контакты</h5>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Icon name="MessageSquare" size={16} className="text-primary" />
                  <span className="text-muted-foreground">Discord: rustserver</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Send" size={16} className="text-primary" />
                  <span className="text-muted-foreground">Telegram: @rustshop</span>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-bold mb-4">Информация</h5>
              <div className="space-y-2">
                <p className="text-muted-foreground">IP сервера: 127.0.0.1:28015</p>
                <p className="text-muted-foreground">Онлайн: 250/300</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground">&copy; 2024 RUST STORE. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}