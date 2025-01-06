import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PostListComponent } from "./post-list.component";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { ApiService } from "../services/api.service";

describe('PostListComponent (Test d\'intégration)', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, PostListComponent], // Import nécessaire pour mocker les requêtes HTTP
      providers: [ApiService],
    }).compileComponents();

    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges(); // Détecte les changements et initialise ngOnInit()
  });

  afterEach(() => {
    httpMock.verify(); // Vérifie qu'il n'y a pas de requêtes non traitées
  });

  it('should display a list of posts', () => {
    const mockPosts = [
      { id: 1, title: 'Post 1', body: 'Content 1' },
      { id: 2, title: 'Post 2', body: 'Content 2' },
    ];

    // Simule une requête GET vers l'API
    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts');
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts); // Retourne une réponse simulée

    // Détecte les changements pour mettre à jour le DOM
    fixture.detectChanges();

    // Vérifie que les données sont affichées correctement dans le DOM
    const listItems = fixture.nativeElement.querySelectorAll('li');
    expect(listItems.length).toBe(2);
    expect(listItems[0].textContent).toContain('Post 1');
    expect(listItems[1].textContent).toContain('Post 2');
  });
});