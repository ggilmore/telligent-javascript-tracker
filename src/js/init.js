/*
 * JavaScript tracker for Telligent: init.js
 * 
 * Significant portions copyright 2010 Anthon Pang. Other portions copyright 
 * 2012-2014 Snowplow Analytics Ltd. Remainder copyright 2016 Telligent Data, 
 * LLC. All rights reserved. 
 * 
 * Redistribution and use in source and binary forms, with or without 
 * modification, are permitted provided that the following conditions are 
 * met: 
 *
 * * Redistributions of source code must retain the above copyright 
 *   notice, this list of conditions and the following disclaimer. 
 *
 * * Redistributions in binary form must reproduce the above copyright 
 *   notice, this list of conditions and the following disclaimer in the 
 *   documentation and/or other materials provided with the distribution. 
 *
 * * Neither the names of Anthon Pang, Snowplow Analytics Ltd, nor Telligent
 *   Data, LLC, nor the names of their contributors, may be used to endorse 
 *   or promote products derived from this software without specific prior
 *   written permission. 
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS 
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT 
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR 
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT 
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, 
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT 
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, 
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY 
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT 
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE 
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

// Snowplow Asynchronous Queue

/*
 * Get the name of the global input function
 */

var telligent = require('./telligent'),
	queueName,
	queue,
	windowAlias = window;

if (windowAlias.GlobalTelligentNamespace && windowAlias.GlobalTelligentNamespace.length > 0) {
	queueName = windowAlias.GlobalTelligentNamespace.shift();
	queue = windowAlias[queueName];
	queue.q = new telligent.Telligent(queue.q, queueName);
} else {
	windowAlias._teaq = windowAlias._teaq || [];
	windowAlias._teaq = new telligent.Telligent(windowAlias._teaq, '_teaq');
}
