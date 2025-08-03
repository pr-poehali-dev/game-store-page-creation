import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border/20 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center">
                <Icon name="Gamepad2" size={24} className="text-black" />
              </div>
              <h1 className="text-2xl font-black tracking-tight">RUST STORE</h1>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">Главная</a>
              <a href="#vip" className="text-muted-foreground hover:text-foreground transition-colors">VIP</a>
              <a href="#items" className="text-muted-foreground hover:text-foreground transition-colors">Предметы</a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">О нас</a>
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-black font-bold">
              <Icon name="ShoppingCart" size={18} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8">
              <Icon name="Zap" size={16} className="text-primary" />
              <span className="text-sm font-medium">Мгновенная выдача товаров</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-primary via-orange-400 to-red-500 bg-clip-text text-transparent">
                RUST
              </span>
              <br />
              МАГАЗИН
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Премиум товары для доминирования на сервере.<br />
              VIP статусы, редкие предметы и эксклюзивные возможности.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-black text-lg px-8 py-4 font-bold">
                <Icon name="Crown" size={20} className="mr-2" />
                Получить VIP
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 font-medium border-border hover:bg-card">
                <Icon name="Package" size={20} className="mr-2" />
                Каталог товаров
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Packages */}
      <section id="vip" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">VIP Статусы</h2>
            <p className="text-xl text-muted-foreground">Выбери свой путь к превосходству</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Bronze VIP */}
            <Card className="relative border-amber-500/20 bg-gradient-to-b from-amber-500/5 to-transparent">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Award" size={32} className="text-black" />
                </div>
                <CardTitle className="text-2xl font-bold">Bronze VIP</CardTitle>
                <CardDescription className="text-4xl font-black text-amber-500 mt-2">
                  299₽
                  <span className="text-base text-muted-foreground">/30 дней</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon name="Check" size={16} className="text-amber-500" />
                    <span className="text-sm">Приоритетный вход на сервер</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" size={16} className="text-amber-500" />
                    <span className="text-sm">Титул [VIP] в чате</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" size={16} className="text-amber-500" />
                    <span className="text-sm">Доступ к VIP чату</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" size={16} className="text-amber-500" />
                    <span className="text-sm">Ежедневные бонусы</span>
                  </div>
                </div>
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold mt-6">
                  Купить Bronze
                </Button>
              </CardContent>
            </Card>

            {/* Silver VIP - Popular */}
            <Card className="relative border-primary/40 bg-gradient-to-b from-primary/10 to-transparent ring-2 ring-primary/20">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-black font-bold">
                Популярный выбор
              </Badge>
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-orange-500 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Star" size={32} className="text-black" />
                </div>
                <CardTitle className="text-2xl font-bold">Silver VIP</CardTitle>
                <CardDescription className="text-4xl font-black text-primary mt-2">
                  599₽
                  <span className="text-base text-muted-foreground">/30 дней</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span className="text-sm">Все преимущества Bronze</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span className="text-sm">Титул [VIP+] с эффектами</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span className="text-sm">Доступ к VIP зонам</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span className="text-sm">Телепортация /home</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span className="text-sm">Еженедельные кейсы</span>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-black font-bold mt-6">
                  Купить Silver
                </Button>
              </CardContent>
            </Card>

            {/* Gold VIP */}
            <Card className="relative border-yellow-500/20 bg-gradient-to-b from-yellow-500/5 to-transparent">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-700 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Crown" size={32} className="text-black" />
                </div>
                <CardTitle className="text-2xl font-bold">Gold VIP</CardTitle>
                <CardDescription className="text-4xl font-black text-yellow-500 mt-2">
                  999₽
                  <span className="text-base text-muted-foreground">/30 дней</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon name="Check" size={16} className="text-yellow-500" />
                    <span className="text-sm">Все преимущества Silver</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" size={16} className="text-yellow-500" />
                    <span className="text-sm">Эксклюзивный титул [GOLD]</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" size={16} className="text-yellow-500" />
                    <span className="text-sm">Телепортация к игрокам</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" size={16} className="text-yellow-500" />
                    <span className="text-sm">Персональный склад</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" size={16} className="text-yellow-500" />
                    <span className="text-sm">Ежедневные кейсы</span>
                  </div>
                </div>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold mt-6">
                  Купить Gold
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Game Items */}
      <section id="items" className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Игровые наборы</h2>
            <p className="text-xl text-muted-foreground">Стартовые преимущества для выживания</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Icon name="Package" size={32} className="text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Стартовый набор</h3>
                <p className="text-muted-foreground text-sm mb-4">Базовые ресурсы для быстрого старта в игре</p>
                <div className="text-2xl font-black text-primary mb-4">99₽</div>
                <Button className="w-full">В корзину</Button>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Icon name="Hammer" size={32} className="text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Набор строителя</h3>
                <p className="text-muted-foreground text-sm mb-4">Инструменты и материалы для постройки базы</p>
                <div className="text-2xl font-black text-primary mb-4">199₽</div>
                <Button className="w-full">В корзину</Button>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Icon name="Shield" size={32} className="text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Военный набор</h3>
                <p className="text-muted-foreground text-sm mb-4">Оружие и броня для защиты территории</p>
                <div className="text-2xl font-black text-primary mb-4">299₽</div>
                <Button className="w-full">В корзину</Button>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Icon name="Gem" size={32} className="text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Премиум ресурсы</h3>
                <p className="text-muted-foreground text-sm mb-4">Редкие материалы и компоненты для крафта</p>
                <div className="text-2xl font-black text-primary mb-4">399₽</div>
                <Button className="w-full">В корзину</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Наши преимущества</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-3xl bg-primary/20 mx-auto mb-6 flex items-center justify-center">
                <Icon name="Zap" size={40} className="text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-3">Мгновенная выдача</h3>
              <p className="text-muted-foreground">Автоматическая выдача всех покупок в течение 30 секунд</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-3xl bg-primary/20 mx-auto mb-6 flex items-center justify-center">
                <Icon name="Lock" size={40} className="text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-3">Безопасность</h3>
              <p className="text-muted-foreground">Защищенные платежи через проверенные системы</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-3xl bg-primary/20 mx-auto mb-6 flex items-center justify-center">
                <Icon name="Headphones" size={40} className="text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-3">Поддержка 24/7</h3>
              <p className="text-muted-foreground">Круглосуточная помощь в Discord и Telegram</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="border-t border-border/20 bg-card/50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center">
                  <Icon name="Gamepad2" size={24} className="text-black" />
                </div>
                <span className="text-2xl font-black">RUST STORE</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Официальный магазин сервера Rust с премиум товарами и VIP статусами.
                Быстрая выдача, честные цены, надежная поддержка.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  <Icon name="MessageSquare" size={16} className="mr-2" />
                  Discord
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="Send" size={16} className="mr-2" />
                  Telegram
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Сервер</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>IP: play.rustserver.com</p>
                <p>Порт: 28015</p>
                <p>Онлайн: 240/300</p>
                <p>Вайп: Четверг</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Помощь</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Правила сервера</p>
                <p>Инструкции по покупке</p>
                <p>Возврат средств</p>
                <p>Техподдержка</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/20 mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 RUST STORE. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}