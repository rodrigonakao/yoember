import Controller from '@ember/controller';
import { gte } from '@ember/object/computed';
import { computed, observer } from '@ember/object';
import { empty } from '@ember/object/computed';
import { match, not } from '@ember/object/computed';
import { and } from '@ember/object/computed';

export default Controller.extend({
    isLongEnough: gte('message.length', 5),
    isMessageEmpty: empty('message'),
    isValid: match('emailAddress', /^.+@.+\..+$/),
    isBothTrue: and('isValid', 'isLongEnough'),
    isDisabled: not('isBothTrue'),

    actions: {

        sendMessage() {
          alert(`Email: ${this.get('emailAddress')}`);
          alert(`Mensagem: ${this.get('message')}`);
        
          this.set('responseMessage', `We got your message and we’ll get in touch soon! ${this.get('emailAddress')} and ${this.get('message')}`);
          this.set('emailAddress', '');
          this.set('message', '');
        }
      },

      actualEmailAddress: computed('emailAddress', function() {
        console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
      }),
    
      emailAddressChanged: observer('emailAddress', function() {
        console.log('observer is called', this.get('emailAddress'));
      })
    
});


