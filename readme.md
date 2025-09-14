# Decorators and Component Communication

## Decorators
1. Class decorator ex @Component, @Pipe, @Injectable....etc
2. Property decorator ex. @Input, @Output, @ViewChild....etc
3. Method decorator ex. HostListener
4. Parameter decorator ex. @inject

## Component Communication

### Ways to share data between components
1. Parent to Child using @Input decorator
2. Child to Parent using @Output and EventEmitter
3. Sibling component: Sharing data using @Input and @Output
4. Parent to Child(accessing child) Sharing data via @ViewChild
5. Unrelated Component: sharing data via service

