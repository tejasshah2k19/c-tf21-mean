import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private sessionService:SessionService,private toastr:ToastrService) { }
 email:string =""
  ngOnInit(): void {
  }

  forgetPassword(){
    this.sessionService.forgetPassword(this.email).subscribe(resp=>{
      if(resp.status == -1){
          this.toastr.error(resp.msg,"",{timeOut:3000})
      }else if(resp.status == 200){
        this.toastr.success(resp.msg,"",{timeOut:3000})
        console.log(resp)
      }else{

      }
    })
  }
}
