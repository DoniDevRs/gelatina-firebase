
export function Footer() {
  return (
    <footer className="py-12 px-6 border-t bg-secondary/10">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <p className="font-headline text-xl font-bold text-primary">Gelatina Anti-Caneta</p>
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} Todos os direitos reservados. 
          <br />Este produto não substitui acompanhamento médico profissional.
        </p>
      </div>
    </footer>
  );
}
