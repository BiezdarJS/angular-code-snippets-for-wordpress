import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { PrismService } from 'src/app/services/prism.service';

@Component({
  selector: 'app-wyslanie-tresci-z-pola-hidden',
  templateUrl: './wyslanie-tresci-z-pola-hidden.component.html',
  styleUrls: ['./wyslanie-tresci-z-pola-hidden.component.scss'],
})
export class WyslanieTresciZPolaHiddenComponent
  implements OnInit, AfterViewChecked, AfterViewInit, OnDestroy
{
  @ViewChild('textArea', { static: true })
  textArea!: ElementRef;
  @ViewChild('codeContent', { static: true })
  codeContent!: ElementRef;
  @ViewChild('pre', { static: true })
  pre!: ElementRef;

  highlighted = false;
  codeType = 'php';

  php = `add_action( 'wpcf7_before_send_mail', 'wpcf7_add_text_to_mail_body', 10, 3 );
function wpcf7_add_text_to_mail_body( $WPCF7_ContactForm, $abort, $submission ) {

        $wpcf7 = WPCF7_ContactForm :: get_current() ;
        $submission = WPCF7_Submission :: get_instance() ;
        if ($submission)
        {
            $posted_data = $submission->get_posted_data() ;
            // nothing's here... do nothing...
            if ( empty ($posted_data))
            return ;

            $mail = $WPCF7_ContactForm->prop('mail') ;
            // Your code
            if ($WPCF7_ContactForm->id === 3822) 
            {
                $nazwa_stanowiska = $_POST['nazwa_stanowiska'];
                $mail['body'] = '<b>Nazwa Stanowiska:</b> ' . $nazwa_stanowiska . '<br />' . $mail['body'];
            }
            // Save the email body
            $WPCF7_ContactForm->set_properties( array("mail" => $mail)) ;

            // return current cf7 instance
            return $WPCF7_ContactForm ;
        }
}`;

  constructor(private prismService: PrismService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.prismService.highlightAll();
  }

  ngAfterViewChecked() {
    if (this.highlighted) {
      this.prismService.highlightAll();
      this.highlighted = false;
    }
  }

  ngOnDestroy() {
    console.log('');
  }
}
