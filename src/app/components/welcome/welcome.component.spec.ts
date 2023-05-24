import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'

import { WelcomeComponent } from './welcome.component'

describe('WelcomeComponent', () => {
  let component: WelcomeComponent
  let fixture: ComponentFixture<WelcomeComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [WelcomeComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
}).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
