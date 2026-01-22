export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="text-lg font-semibold text-forest">
          Coleccion de Autos
        </div>
        <nav className="text-sm text-slate-600">
          Catalogo · Favoritos · Estadisticas
        </nav>
      </div>
    </header>
  );
}
