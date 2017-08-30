/*
 * Copyright (C) 2013 salesforce.com, inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
({
    init: function (component, event, helper) {
        var descriptor = component.get('v.descriptor');
        $A.getDefinition(descriptor, function(foundDefinition){
            if (foundDefinition){
                $A.createComponent('auradocs:viewer', {descriptor: descriptor}, function(body, status) {
                    if (status === "SUCCESS") {
                        component.set('v.body', [body]);
                    }
                });
            }
        });

        var description = component.get("v.description");
        component.set("v.description", helper.sanitize(description));
    },

    valueChange: function(component, event, helper) {
        var description = component.get("v.description");
        component.set("v.description", helper.sanitize(description));
    }
});