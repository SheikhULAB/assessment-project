import Link from 'next/link';
import React from 'react';
import { Avatar } from './ui/avatar';
import { Button } from "@/components/ui/button"

const RightSide = () => {
    return (
        <div>
           <div>
             <h2>My Profile</h2>
             <div>
                <Link href="/edit-profile">Edit Profile</Link>
                <Link href="/certificates">Certificates</Link>
                <Link href="/competitions">Competitions</Link>
             </div>
            </div>

            <div>
              <Avatar />
              <Button variant="outline">Upload Image</Button>     
              <Button variant="outline">Delete</Button>     
            </div>

            <div>
              <form action="">
                  
              </form>  
            </div>            
        </div>
    );
};

export default RightSide;